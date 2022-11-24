import Icon from 'react-native-vector-icons/FontAwesome5';

export const headerStyles = {
  headerStyle: {
    backgroundColor: '#181818',
  },
  headerTintColor: '#eaeaea',
};

export const BottomTabStyles = {
  tabBarActiveTintColor: '#fe3d6d',
  tabBarInactiveTintColor: '#B2B2B2',
  tabBarStyle: {
    backgroundColor: '#181818',
  },
  headerStyle: {
    backgroundColor: '#181818',
  },
  headerTintColor: '#eaeaea',
};

export const drawerStyles = {
  drawerStyle: {
    backgroundColor: '#181818',
  },
  drawerActiveTintColor: '#eaeaea',
  drawerInactiveTintColor: '#808080',
  headerStyle: {
    backgroundColor: '#181818',
  },
  headerTintColor: '#eaeaea',
};

export const getBottomTabIcon = (routeName, isFocused) => {
  const color = isFocused ? '#fe3d6d' : '#B2B2B2';
  const TabIcon = ({name}) => <Icon size={22} color={color} name={name} />;

  switch (routeName) {
    case 'Profile:Root':
      return <TabIcon name="user" />;
    case 'NewPost:Root':
      return <TabIcon name="plus" />;
    case 'Feed:Root':
      return <TabIcon name="home" />;

    default:
      return <TabIcon name="user" />;
  }
};
