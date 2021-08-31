import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './style'

const Header = ({ title }) => (
  <Container>
    Bom dia
  </Container>
)
Header.propTypes = {
  title: PropTypes.object.isRequired
}
export default Header
