import React, {useEffect, useState} from 'react';
import {Button, Image, ScrollView, TouchableOpacity, View} from 'react-native';
import Text from '../text/text';
import {styles} from './welcomeStyles';

const Welcome = ({logout}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      const response = await import('../../api/list.json').then(
        res => res.default,
      );
      setData(response);
      setIsLoading(false);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.scrollView}>
        <View style={styles.box}>
          <Text style={styles.subHeader} type="bold">
            Welcome to Wow
          </Text>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={require('../../assets/avatar.png')}
            />
            <Text style={styles.username}>Bobby Fischer</Text>
            <Text style={styles.role}>React native developer</Text>
          </View>
          <Button title="log out" onPress={logout} />
        </View>

        {isLoading ? (
          <View style={styles.resume}>
            <Text style={styles.pageText}>Please wait ...</Text>
          </View>
        ) : (
          data.map(i => (
            <View key={i} style={styles.resume}>
              <Text style={styles.pageText}>{i}</Text>
              <TouchableOpacity>
                <Text style={styles.pageLink}>View detail</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
};

export default Welcome;
