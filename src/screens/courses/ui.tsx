import React from 'react';
import {View} from 'react-native';

import {loadCoursesList} from './api';
import {styles} from './style';
import {CoursesFilterWidget, CoursesListWidget} from '~/widgets/courses';
import {SYSTEM_FILTERS, SystemFilter} from '~/entities/course';
import {FiltersModalWidget} from '~/widgets/courses';

import type {Course, Filter} from '~/entities/course';

const CoursesListScreen: React.FC = () => {
  const [courses, setCourses] = React.useState<Course[]>([]);
  const [selectedFilter, setSelectedFilter] = React.useState<Filter>(SYSTEM_FILTERS[0]);
  const [filtersModalVisible, setFiltersModalVisible] = React.useState(false);

  const filters: Filter[] = React.useMemo(
    () => [
      ...SYSTEM_FILTERS,
      ...Array.from(new Set(courses.flatMap(course => course.tags))).map(tag => ({
        id: tag,
        value: tag,
      })),
    ],
    [courses],
  );
  const filteredCourses = React.useMemo(() => {
    switch (selectedFilter.id) {
      case SystemFilter.ALL:
        return courses;
      default:
        return courses.filter(course => course.tags.includes(selectedFilter.id));
    }
  }, [selectedFilter, courses]);

  React.useEffect(() => {
    initCourses();
  }, []);

  const initCourses = async () => {
    const fetchedCourses = await loadCoursesList();
    setCourses(fetchedCourses);
  };

  const handleFilterWidgetPress = () => {
    setFiltersModalVisible(true);
  };

  const handleFiltersModalClose = () => {
    setFiltersModalVisible(false);
  };

  const handleSelectFilter = (filter: Filter) => {
    setSelectedFilter(filter);
    setFiltersModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <CoursesFilterWidget selectedFilter={selectedFilter} onPress={handleFilterWidgetPress} />
      </View>
      <CoursesListWidget courses={filteredCourses} />
      <FiltersModalWidget
        visible={filtersModalVisible}
        filters={filters}
        selectedFilter={selectedFilter}
        onSelectFilter={handleSelectFilter}
        onClose={handleFiltersModalClose}
      />
    </View>
  );
};

export default CoursesListScreen;
