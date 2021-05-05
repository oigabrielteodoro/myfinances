import { ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';
import { formatValue } from '~/libs/format';

import { Container, ComparationContainer } from './styles';

interface CardAnalyticProps {
  title: string;
  currentValue: number;
  icon?: ComponentType<IconBaseProps>;
}

export function CardAnalytic({ title, currentValue, icon: Icon }: CardAnalyticProps) {
  const formattedCurrentValue = formatValue(currentValue);

  const isProfit = true;

  return (
    <Container isProfit={isProfit}>
      <span>{title}</span>
      <strong>{formattedCurrentValue}</strong>

      {Icon && <Icon size={20} />}

      <ComparationContainer isProfit={isProfit}>
        {isProfit ? <FiArrowUp color="#49EAC4" size={16} /> : <FiArrowDown color="#EA4F6D" size={16} />}

        <span>+10% desde o mês passado</span>
      </ComparationContainer>
    </Container>
  );
}
