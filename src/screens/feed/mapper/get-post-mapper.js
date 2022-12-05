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
  const baseUrl = 'http://192.168.1.99:1337';

  const mappedResponse = data.map(item => {
    const imageSrc = item.attributes.images.data
      ? `${baseUrl}${item.attributes.images.data[0].attributes.url}`
      : require('../../../assets/post4.jpeg');

    const updatedData = {
      id: item.id,
      username: item.attributes.user.data.attributes.username,
      title: item.attributes.title,
      caption: item.attributes.caption,
      publishAt: convertDate(item.attributes.publishedAt),
      imageSrc,
      avatarSrc: require('../../../assets/man2.jpg'),
    };
    return updatedData;
  });
  return mappedResponse;
};
