import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { Text } from '../components/Text';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 10,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export const List = ({ navigation }) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(response => {
        setData(response);
      });
  }, []);

  return (
    <FlatList
      data={data}
      style={styles.container}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.push('Post', { post: item })}
        >
          <View key={item.id} style={styles.item}>
            <Text>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
