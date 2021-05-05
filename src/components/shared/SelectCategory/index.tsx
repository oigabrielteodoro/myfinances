import CategoryDTO from './dtos/CategoryDTO';

import { CategoryItem, Container } from './styles';

interface SelectCategoryProps {
  categories: CategoryDTO[];
  categorySelected?: string;
  onUpdateCategory: (category: string) => void;
}

export function SelectCategory({
  categories,
  categorySelected,
  onUpdateCategory,
}: SelectCategoryProps) {
  return (
    <Container>
      {categories.map(category => (
        <CategoryItem
          isSelected={category.value === categorySelected}
          onClick={() => onUpdateCategory(category.value)}
        >
          {category.label}
        </CategoryItem>
      ))}
    </Container>
  );
}
