import React from 'react';

import {
  Container,
  Header,
  Title,
  Footer,
  Amount,
  LastTransaction,
  Icon
} from './styles';

interface Props {
  type: 'up' | 'down' | 'total'
  title: string;
  amount: string;
  lastTransaction: string;
}
 
const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-cirle',
  total: 'dollar-sign',
}

export default function HighlightCart({
  type,
  title,
  amount,
  lastTransaction
}: Props) {
  return (
    <Container type={type} >
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>

      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>

  )
}