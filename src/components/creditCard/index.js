import {useState} from 'react'

import {
  MainContainer,
  CardContainer,
  Heading,
  CreditContainer,
  CardNumber,
  Title,
  Name,
  InputField,
  InputContainer,
  InputTitle,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNum, setCardNum] = useState('')
  const [name, setName] = useState('')

  const onChangeCard=(event)=>{
    setCardNum(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value)
  }

  return (
    <MainContainer>
      <CardContainer>
        <Heading>CREDIT CARD</Heading>
        <CreditContainer data-testid="creditCard">
          <CardNumber>{cardNum}</CardNumber>
          <Title>CARDHOLDER NAME</Title>
          <Name>{name}</Name>
        </CreditContainer>
      </CardContainer>
      <InputContainer>
        <InputField>
          <InputTitle>Payment Details</InputTitle>
          <Input
            placeholder="Card Number"
            value={cardNum}
            type="input"
            onChange={onChangeCard}
          />
          <Input
            placeholder="Cardholder Name..."
            value={name}
            type="input"
            onChange={onChangeName}
          />
        </InputField>
      </InputContainer>
    </MainContainer>
  )
}

export default CreditCard
