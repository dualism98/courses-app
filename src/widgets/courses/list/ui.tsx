import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {styles} from './style';
import {CourseCardEntity} from '~/entities/course';

import type {CoursesListWidgetProps} from './types';
import type {Course} from '~/entities/course';

const CoursesListWidget: React.FC<CoursesListWidgetProps> = ({courses}) => {
  const insets = useSafeAreaInsets();

  const renderItem: ListRenderItem<Course> = React.useCallback(({item}) => {
    return <CourseCardEntity course={item} />;
  }, []);

  return (
    <FlatList
      keyExtractor={item => `CourseListItem_${item.id}`}
      data={courses}
      renderItem={renderItem}
      contentContainerStyle={[
        styles.contentContainer,
        {paddingLeft: insets.left + 12, paddingRight: insets.right + 12},
      ]}
      showsHorizontalScrollIndicator={false}
      horizontal
      initialNumToRender={10}
      maxToRenderPerBatch={20}
    />
  );
};

export default CoursesListWidget;
