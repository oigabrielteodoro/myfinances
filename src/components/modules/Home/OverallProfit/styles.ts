import styled, { css } from 'styled-components';

interface ObjectiveProgressContainerProps {
  progress: number;
}

export const Container = styled.div`
  background: var(--shape);
  border-radius: 10px;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 15px;

  strong {
    color: var(--white);
    font-size: 1.25rem;

    margin: 15px 15px 0;
  }
`;

export const Content = styled.div`
  background: var(--background-secondary);
  height: 300px;
  margin-top: 15px;
`;

export const ObjectiveContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.25rem;

  margin: 0 30px 30px;
`;

export const ObjectiveCard = styled.div`
  background: var(--background-secondary);
  border-radius: 10px;

  padding: 1rem;

  strong {
    font-size: 18px;

    display: flex;
    align-items: flex-end;

    span {
      color: var(--gray-100);
      font-size: 14px;
      font-weight: lighter;
      margin-left: 8px;
    }
  }
`;

export const ObjectiveProgressContainer = styled.div<ObjectiveProgressContainerProps>`
  position: relative;

  background: var(--gray-800);
  height: 10px;
  border-radius: 5px;
  width: 100%;

  margin-top: 16px;

  ${({ progress }) => css`
    &::before {
      content: '';
      position: absolute;
      width: ${progress}%;
      height: 10px;
      background: var(--purple-400);

      border-radius: 5px;
    }
  `}
`;

export const CreateObjective = styled.button`
  display: flex;
  align-items: center;

  color: var(--gray-400);
  font-size: 14px;

  margin-top: 16px;

  background: transparent;
  border: 0;

  svg {
    margin-right: 8px;
  }
`;
