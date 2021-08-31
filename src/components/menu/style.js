import styled from 'styled-components'
import { Colors } from '../../globalStyles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${Colors.gradientLight};
`

export const Entry = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  width: 100px;
  font-size: 50px;
  background: none;
  border: 2px solid black;
  border-radius: 10px;
  padding: 0;
  text-align: center;
  outline: none;
`

export const Label = styled.p`
  font-size: 30px;
`

export const Last = styled.p`
  width: 100px;
  font-size: 50px;
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
`
