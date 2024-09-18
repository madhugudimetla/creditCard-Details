import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const CardContainer = styled.div`
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const Heading = styled.h1`
  color: white;
  font-size: 25px;
  border-bottom: 2px solid yellow;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

export const CreditContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 20px;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    height: 50vh;
  }
`
export const CardNumber = styled.p`
  color: white;
  font-size: 23px;
  height: 50px;
  margin-top: 50px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`

export const Title = styled.p`
  color: white;
  font-size: 18px;
  height: 50px;
  font-weight:bold
`

export const Name = styled.p`
  color: white;
  font-size: 20px;
  height: 50px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`

export const InputContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow:1;
  margin: 10px;
`

export const InputTitle = styled.h1`
  color: #3b4b69;
  font-size: 25px;
`

export const InputField = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 8px 2px black;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 70%;
  padding: 30px;
  border-radius: 10px;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid black;
  margin-bottom: 30px;
`
