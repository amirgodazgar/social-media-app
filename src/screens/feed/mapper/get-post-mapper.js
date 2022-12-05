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
  const baseUrl = 'http://192.168.1.99:1337';

  console.log('00000000000000', data[0].attributes.images.data);

  const mappedResponse = data.map(item => {
    const imageSrc = item.attributes.images.data
      ? `${baseUrl}${item.attributes.images.data[0].attributes.url}`
      : require('../../../assets/post4.jpeg');

    console.log(imageSrc);

    const data = {
      id: item.id,
      username: item.attributes.user.data.attributes.username,
      title: item.attributes.title,
      caption: item.attributes.caption,
      publishAt: convertDate(item.attributes.publishedAt),
      imageSrc,
      avatarSrc: require('../../../assets/man4.jpeg'),
      // imageSrc: require('../../../assets/post4.jpeg'),
    };
    return data;
  });
  return mappedResponse;
};
