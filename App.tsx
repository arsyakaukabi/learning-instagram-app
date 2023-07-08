import {StyleSheet, View, ScrollView} from 'react-native';
import FeedPost from './src/components/FeedPost';

function generateRandomNumber(n: number) {
  return Math.floor(Math.random() * n) + 1;
}

const post = {
  id: '1',
  createdAt: '19 December 2023',
  image: `https://picsum.photos/id/${generateRandomNumber(100)}/500`,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus unde blanditiis. Eos fugiat dolorem ea fugit aut sapiente corrupti autem dolores deleniti architecto, omnis, amet unde dignissimos quam minima?',
  user: {
    id: 'u1',
    image: `https://picsum.photos/id/${generateRandomNumber(100)}/300`,
    username: 'arsyakaukabi',
  },
  nofComments: 11,
  nofLikes: 34,
  comments: [
    {
      id: '1',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. H',
      user: {
        id: 'u1',
        username: 'vadimnotjustdev',
      },
    },
    {
      id: '2',
      comment: 'Lorem ipsum dolor sit amet',
      user: {
        id: 'u1',
        username: 'anotheruser',
      },
    },
  ],
};

const App = () => {
  return (
    <ScrollView style={styles.app}>
      <FeedPost post={post} />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  app: {flex: 1},
});
