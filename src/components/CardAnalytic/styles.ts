import styled, { css } from 'styled-components';

interface ContainerProps {
  isProfit?: boolean;
}

type ComparationContainerProps = ContainerProps;

export const Container = styled.div<ContainerProps>`
  background: var(--shape);
  border-radius: 0.5rem;

  padding: 1.75rem;

  display: flex;
  flex-direction: column;

  border: 1px solid transparent;

  transition: border-color 0.2s;

  > span {
    font-size: 1rem;
    color: var(--gray-50);
  }

  strong {
    font-size: 1.75rem;
    line-height: 2.1rem;
    margin-top: 8px;
  }

  &:hover {
    ${({ isProfit }) =>
      isProfit
        ? css`
            border-color: var(--green-400);
          `
        : css`
            border-color: var(--red-400);
          `}
  }
`;

export const ComparationContainer = styled.div<ComparationContainerProps>`
  display: flex;
  align-items: center;

  margin-top: 20px;

  span {
    margin-left: 8px;
    font-size: 0.875rem;

    ${({ isProfit }) =>
      isProfit
        ? css`
            color: var(--green-400);
          `
        : css`
            color: var(--red-400);
          `}
  }
`;
