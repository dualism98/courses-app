import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './style';

import type {CourseCardEntityProps} from './types';

const CourseCardEntity: React.FC<CourseCardEntityProps> = ({course}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer, {backgroundColor: course.bgColor}]}>
        <Image source={{uri: course.image}} style={styles.image} />
      </View>
      <View style={styles.nameContainer}>
        <Text numberOfLines={1} style={styles.name}>
          {course.name}
        </Text>
      </View>
    </View>
  );
};

export default CourseCardEntity;
