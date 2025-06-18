import React from 'react';
import {FlatList, Image, ListRenderItem, Modal, Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {styles} from './style';
import {cross} from '~/assets/icons';
import {CourseFilterEntity} from '~/entities/course';

import type {FiltersModalWidgetProps} from './types';
import type {Filter} from '~/entities/course';

const FiltersModalWidget: React.FC<FiltersModalWidgetProps> = ({
  visible,
  filters,
  selectedFilter,
  onSelectFilter,
  onClose,
}) => {
  const insets = useSafeAreaInsets();

  const renderItem: ListRenderItem<Filter> = React.useCallback(
    ({item}) => {
      return (
        <CourseFilterEntity
          filter={item}
          selected={item.id === selectedFilter.id}
          onPress={() => onSelectFilter(item)}
        />
      );
    },
    [selectedFilter, onSelectFilter],
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      supportedOrientations={['landscape']}>
      <View style={styles.container}>
        <Pressable onPress={onClose} style={[styles.closeButton, {right: insets.right + 12}]}>
          <Image source={cross} style={styles.closeImage} />
        </Pressable>
        <Text style={styles.title}>Выбор темы</Text>
        <FlatList
          keyExtractor={item => `FiltersModalItem_${item.id}`}
          data={filters}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          initialNumToRender={10}
          contentContainerStyle={[styles.contentContainer, {paddingBottom: insets.bottom + 12}]}
        />
      </View>
    </Modal>
  );
};

export default FiltersModalWidget;
