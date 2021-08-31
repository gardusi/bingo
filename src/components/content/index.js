import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './style'

const Content = ({ title, children }) => (
  <Container>
    {children}
  </Container>
)
Content.propTypes = {
  title: PropTypes.object.isRequired
}
export default Content
