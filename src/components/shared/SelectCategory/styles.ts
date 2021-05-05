import styled, { css } from 'styled-components';

interface CategoryItemProps {
  isSelected: boolean;
}

export const Container = styled.div`
  background: var(--background-secondary);
  padding: 8px;
  border-radius: 5px;
`;

export const CategoryItem = styled.button<CategoryItemProps>`
  background: transparent;
  border: 0;

  color: var(--white);

  padding: 8px 16px;
  border-radius: 5px;

  transition: background 0.5s, filter 0.2s;

  font-size: 14px;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: var(--gray-800);
      font-weight: 500;
    `}

  ${({ isSelected }) =>
    !isSelected &&
    css`
      &:hover {
        filter: brightness(0.8);
      }
    `}
`;
