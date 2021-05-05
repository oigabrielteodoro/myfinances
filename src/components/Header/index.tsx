import { FiBell } from 'react-icons/fi';

import {
  Container,
  NavigationContainer,
  NavigationItem,
  AccountContainer,
  AccountInformationContainer,
  AccountAvatar,
  AccountButton,
} from './styles';

export function Header() {
  return (
    <Container>
      <img src="/static/img/logo.svg" alt="MyFinances" />

      <NavigationContainer>
        <ul>
          <NavigationItem isSelected>Dashboard</NavigationItem>
          <NavigationItem>Configurações</NavigationItem>
          <NavigationItem>Transações</NavigationItem>
        </ul>
      </NavigationContainer>

      <AccountContainer>
        <AccountButton type="button" isStackedToRead>
          <FiBell size={20} />
        </AccountButton>

        <AccountInformationContainer>
          <section>
            <strong>Gabriel Teodoro</strong>
            <span>@oigabrielteodoro</span>
          </section>
          <AccountAvatar>JG</AccountAvatar>
        </AccountInformationContainer>
      </AccountContainer>
    </Container>
  );
}
