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
  const baseUrl = 'https://powerful-dusk-84737.herokuapp.com';
  const mappedResponse = data.slice(0, 3).map(item => {
    console.log(item.attributes.images.data[0].attributes.url);
    return {
      id: item.id,
      username: item.attributes.user.data.attributes.username,
      title: item.attributes.title,
      caption: item.attributes.caption,
      publishAt: convertDate(item.attributes.publishedAt),
      imageSrc: `${baseUrl}${item.attributes.images.data[0].attributes.url}`,
      avatarSrc: require('../../../assets/man4.jpeg'),
      // imageSrc: require('../../../assets/post4.jpeg'),
    };
  });

  return mappedResponse;
};
