import styled, { css } from 'styled-components';

interface LayoutGridProps {
  gap?: number;
  gridTemplateColumns?: string;
}

export default styled.div<LayoutGridProps>`
  display: grid;

  ${({ gap = 0.75, gridTemplateColumns = '1fr' }) => css`
    grid-gap: ${gap}rem;
    grid-template-columns: ${gridTemplateColumns};
  `}
`;
