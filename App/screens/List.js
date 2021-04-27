import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useQuery } from 'react-query';

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
  const { data } = useQuery('posts', () =>
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()),
  );

  return (
    <FlatList
      data={data}
      style={styles.container}
      keyExtractor={item => `${item.id}`}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.push('Post', { post: item })}
        >
          <View style={styles.item}>
            <Text>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
