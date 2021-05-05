import { CardAnalytic } from '~/components/CardAnalytic';

import { Container, AnalyticsContainer } from '~/styles/pages/Home';

export default function Home() {
  return (
    <Container>
      <AnalyticsContainer>
        <CardAnalytic title="Entradas" currentValue={150} />
        <CardAnalytic title="Saídas" currentValue={150} />
        <CardAnalytic title="Total" currentValue={150} />
      </AnalyticsContainer>
    </Container>
  );
}
