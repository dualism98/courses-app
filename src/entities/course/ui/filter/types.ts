import {Filter} from '~/entities/course';

export interface CourseFilterEntityProps {
  filter: Filter;
  selected: boolean;
  onPress: () => void;
}
