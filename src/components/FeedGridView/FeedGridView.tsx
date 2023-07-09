import {FlatList, Image} from 'react-native';
import React from 'react';
import {Ipost} from '../../types/models';
import FeedGridItem from './FeedGridItem';

interface IFeedGridView {
  data: Ipost;
  ListHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}

const FeedGridView = ({data, ListHeaderComponent}: IFeedGridView) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <FeedGridItem post={item} />}
      showsVerticalScrollIndicator={false}
      numColumns={3}
      ListHeaderComponent={ListHeaderComponent}
      style={{alignContent: 'center'}}
    />
  );
};

export default FeedGridView;
