import React from 'react'
import PropTypes from 'prop-types'
import { Container, Square } from './style'

const Board = ({ title }) => (
  <Container>
    {Array(75).fill().map((_, index) =>
      <Square>
        {index}
      </Square>
    )}
  </Container>
)
Board.propTypes = {
  title: PropTypes.object.isRequired
}
export default Board
