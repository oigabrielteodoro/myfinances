import { SEO } from '~/components/shared/SEO';

import { CardAnalytic } from '~/components/shared/CardAnalytic';

import { OverallProfit } from '~/components/modules/Dashboard/OverallProfit';

import LayoutGrid from '~/components/shared/LayoutGrid';

import { Container, AnalyticsContainer } from '~/styles/pages/Home';

export default function Home() {
  return (
    <>
      <SEO title="Home" />

      <Container>
        <AnalyticsContainer>
          <CardAnalytic title="Entradas" currentValue={150} />
          <CardAnalytic title="Saídas" currentValue={150} />
          <CardAnalytic title="Total" currentValue={150} />
        </AnalyticsContainer>

        <LayoutGrid gridTemplateColumns="2fr 1fr">
          <OverallProfit />
        </LayoutGrid>
      </Container>
    </>
  );
}
