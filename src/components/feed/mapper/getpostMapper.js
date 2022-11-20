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

export const getPostsMapper = data => {
  const mappedResponse = data.data.map(item => ({
    id: item.id,
    username: nameCreator(item.id),
    title: item.attributes.title,
    caption: item.attributes.caption,
    publishAt: convertDate(item.attributes.publishedAt),
    image: item.attributes.images,
    // .map(img => ({
    //   id: img.id,
    //   name: img.attributes.name,
    //   src: img.attributes.url,
    // })),
  }));

  return mappedResponse;
};
