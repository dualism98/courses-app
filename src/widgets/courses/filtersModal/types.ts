import type {Filter} from '~/entities/course';

export interface FiltersModalWidgetProps {
  visible: boolean;
  filters: Filter[];
  selectedFilter: Filter;
  onSelectFilter: (filter: Filter) => void;
  onClose: () => void;
}
