import React from 'react';
import {Image, Pressable, Text} from 'react-native';

import {styles} from './style';
import {arrowDown} from '~/assets/icons';

import type {CoursesFilterWidgetProps} from './types';

const CoursesFilterWidget: React.FC<CoursesFilterWidgetProps> = ({selectedFilter, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{selectedFilter.value}</Text>
      <Image source={arrowDown} style={styles.arrowImage} />
    </Pressable>
  );
};

export default CoursesFilterWidget;
