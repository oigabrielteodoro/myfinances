import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface NavigationItemProps {
  isSelected?: boolean;
}

interface AccountButtonProps {
  isStackedToRead?: boolean;
}

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background: var(--shape);
  padding: 0.75rem 4rem;

  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
`;

export const NavigationContainer = styled.nav`
  margin: 0 auto;

  ul {
    display: flex;
    align-items: center;
  }
`;

export const NavigationItem = styled.li<NavigationItemProps>`
  position: relative;
  color: var(--gray-100);

  transition: filter 0.2s;
  cursor: pointer;

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: var(--white);
      font-weight: 500;

      &::before {
        content: '';
        position: absolute;
        bottom: -33px;
        height: 2px;
        left: -2px;
        right: 0px;
        background: var(--purple-400);
      }
    `}

  & + li {
    margin-left: 2rem;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;

export const AccountContainer = styled.div`
  display: flex;
  align-items: center;

  margin-left: auto;
`;

export const AccountInformationContainer = styled.button`
  display: flex;
  align-items: center;

  margin-left: 20px;

  background: transparent;
  border: 0;

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    margin-right: 20px;

    strong {
      color: var(--white);
      font-size: 1rem;
      font-weight: 500;
    }

    span {
      color: var(--gray-100);
      font-size: 0.875rem;
    }
  }
`;

export const AccountAvatar = styled.div`
  border-radius: 50%;
  background: var(--background-secondary);
  color: var(--gray-50);
  font-size: 1.25rem;

  font-weight: 500;

  height: 62px;
  width: 62px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid var(--purple-400);

  transition: background 0.2s;
  cursor: pointer;

  &:hover {
    background: ${darken(0.03, '#36373F')};
  }
`;

export const AccountButton = styled.button<AccountButtonProps>`
  position: relative;

  background: var(--background-secondary);
  color: var(--white);

  height: 40px;
  width: 40px;

  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#36373F')};
  }

  ${({ isStackedToRead }) =>
    isStackedToRead &&
    css`
      &::before {
        content: '';
        position: absolute;
        background: var(--red-400);
        height: 10px;
        width: 10px;

        top: -2px;
        right: -4px;
        border-radius: 50%;
      }
    `}
`;
