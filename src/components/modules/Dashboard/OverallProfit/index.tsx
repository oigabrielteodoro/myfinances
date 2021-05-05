import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

import { SelectCategory } from '~/components/shared/SelectCategory';
import SimpleAreaChart from '~/components/shared/SimpleChartArea';

import {
  Container,
  Header,
  ObjectiveContainer,
  ObjectiveCard,
  ObjectiveProgressContainer,
  CreateObjective,
} from './styles';

export function OverallProfit() {
  const [categorySelected, setCategorySelected] = useState<string>('monthly');

  const categories = [
    { label: 'Mensal', value: 'monthly' },
    { label: 'Anual', value: 'yearly' },
  ];

  return (
    <Container>
      <Header>
        <strong>Lucro do {categorySelected === 'monthly' ? 'mês' : 'ano'}</strong>

        <SelectCategory
          categories={categories}
          categorySelected={categorySelected}
          onUpdateCategory={setCategorySelected}
        />
      </Header>

      <SimpleAreaChart
        series={[
          {
            name: 'Lucro',
            data: [31, 40, 28, 51, 30],
          },
        ]}
      />

      <ObjectiveContainer>
        <ObjectiveCard>
          <strong>
            Meta mensal <span>R$ 150,00 de R$ 800,00</span>
          </strong>

          <ObjectiveProgressContainer progress={25} />

          <CreateObjective>
            <FiPlus size={16} />
            Nova meta mensal
          </CreateObjective>
        </ObjectiveCard>
        <ObjectiveCard>
          <strong>
            Meta anual <span>R$ 150,00 de R$ 12.000,00</span>
          </strong>

          <ObjectiveProgressContainer progress={5} />

          <CreateObjective>
            <FiPlus size={16} />
            Nova meta anual
          </CreateObjective>
        </ObjectiveCard>
      </ObjectiveContainer>
    </Container>
  );
}
