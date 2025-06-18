import type {Filter} from '~/entities/course';

export interface CoursesFilterWidgetProps {
  selectedFilter: Filter;
  onPress: () => void;
}
