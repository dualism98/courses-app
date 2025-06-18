import React from 'react';
import {Pressable, Text} from 'react-native';

import {styles} from './style';

import type {CourseFilterEntityProps} from './types';

const CourseFilterEntity: React.FC<CourseFilterEntityProps> = ({filter, selected, onPress}) => {
  return (
    <Pressable style={[styles.container, selected && styles.selectedContainer]} onPress={onPress}>
      <Text style={[styles.title, selected && styles.selectedTitle]}>{filter.value}</Text>
    </Pressable>
  );
};

export default CourseFilterEntity;
