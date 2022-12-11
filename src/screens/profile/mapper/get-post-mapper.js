export const convertDate = specificDate => {
  const currentDate = new Date();
  const publishDate = new Date(specificDate);
  const date = +currentDate.getDate() - +publishDate.getDate();
  return date > 0 ? `${date} days ago` : 'Couple hours ago';
};

export const nameCreator = id => {
  const names = ['Bobby Fischer', 'Emma Smith', 'John Doe', 'Christian Bale'];

  const selectedName = names.find((_, index) => id === index + 1);

  if (selectedName === undefined) {
    return 'Loe Messi';
  } else {
    return selectedName;
  }
};

export const getProfilePostsMapper = data => {
  const baseUrl = 'http://192.168.1.99:1337';

  const mappedResponse = data.map(item => {
    const imageSrc = item.images
      ? `${baseUrl}${item.images[0].url}`
      : require('../../../assets/post4.jpeg');

    const updatedData = {
      id: item.id,
      title: item.title,
      caption: item.caption,
      publishAt: convertDate(item.publishedAt),
      imageSrc,
      avatarSrc: require('../../../assets/man2.jpg'),
    };
    return updatedData;
  });
  return mappedResponse;
};
