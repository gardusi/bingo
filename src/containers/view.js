import React, { Fragment } from 'react'
import { Background } from '../globalStyles'
import Header from '../components/header'
import Content from '../components/content'
import Board from '../components/board'
import Menu from '../components/menu'

const DashboardView = props => {
  // const [games, filterGames] = useOwnedGames(props)
  return (
    <Fragment>
      <Background>
        <Header />
        <Content>
          <Board />
          <Menu />
        </Content>
      </Background>
    </Fragment>
  )
}
export default DashboardView
