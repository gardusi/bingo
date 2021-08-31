import React from 'react'
import PropTypes from 'prop-types'
import { Container, Entry, Label, Last, Input } from './style'

const Menu = ({ children }) => (
  <Container>
    <Entry>
      <Last>
        40
      </Last>
      <Label>
        Última
      </Label>
    </Entry>
    <Entry>
      <Input />
      <Label>
        Sorteada
      </Label>
    </Entry>
  </Container>
)
Menu.propTypes = {
  title: PropTypes.object.isRequired
}
export default Menu
