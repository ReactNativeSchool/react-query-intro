import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { Text } from '../components/Text';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  item: {
    paddingVertical: 10,
  },
});

export const Post = ({ route }) => {
  const post = route?.params?.post;
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
      .then(res => res.json())
      .then(response => {
        setComments(response);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text type="header">{post.title}</Text>
      <Text>{post.body}</Text>
      {comments.length > 0 && (
        <>
          <Text type="header" style={{ marginTop: 20 }}>
            Comments
          </Text>
          {comments.map(comment => (
            <View key={comment.id} style={styles.item}>
              <Text>{comment.body}</Text>
              <Text>{comment.email}</Text>
            </View>
          ))}
        </>
      )}
    </ScrollView>
  );
};
