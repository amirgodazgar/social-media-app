export const convertDate = specificDate => {
  const currentDate = new Date();
  const publishDate = new Date(specificDate);
  const date = +currentDate.getDate() - +publishDate.getDate();
  return date > 0 ? `${date} days ago` : 'Couple hours ago';
};

export const nameCreator = id => {
  const names = ['Bobby Fischer', 'Emma Smith', 'John Doe', 'Christian Bale'];

  const selectedName = names.find((_, index) => id === index + 1);

  if (selectedName === undefined) return 'Loe Messi';
  else return selectedName;
};

// https://powerful-dusk-84737.herokuapp.com/uploads/cat_65ce6855a3.jpg

export const getPostsMapper = data => {
  const mappedResponse = data.map(item => ({
    id: item.id,
    username: item.user ? item.user.data.attributes.username : 'username',
    title: item.attributes.title,
    caption: item.attributes.caption,
    publishAt: convertDate(item.attributes.publishedAt),
    image: item.attributes.images,
    imageSrc: require('../../../assets/post4.jpeg'),
    avatarSrc: require('../../../assets/man4.jpeg'),
    // .map(img => ({
    //   id: img.id,
    //   name: img.attributes.name,
    //   src: img.attributes.url,
    // })),
  }));

  return mappedResponse;
};
