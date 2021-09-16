import React from 'react';
import HighlightCart from '../../components/HighlightCard';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCarts
  
} from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/53905314?s=400&u=e725d59a2b38aff6ed2e6a66b6e64ee507126347&v=4' }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Rodrigo</UserName>
            </User>
          </UserInfo>
          
         <Icon name="power" />
          
        </UserWrapper>
      </Header>

      <HighlightCarts>
        <HighlightCart
          type="up"
          title="Entradas"
          amount="R$ 1.259,00"
          lastTransaction="Última entrada dia 13 de abril"
         />
        <HighlightCart 
          type="down"
          title="Saídas"
          amount="R$ 17.400,00"
          lastTransaction="Última saída dia 03 de abril"
        />
        <HighlightCart
           type="total"
           title="Total"
           amount="R$ 16.141,00"
           lastTransaction="01 à 16 de abril"
        />
      </HighlightCarts>
    </Container>
  );
}

