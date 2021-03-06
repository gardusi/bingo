import { connect } from 'react-redux'
import { getOwnedGames } from '../actions'
import DashboardView from './view'

const mapStateToProps = state => ({
  ownedGames: state.get('app').get('ownedGames'),
  ownedGamesMetadata: state.get('app').get('ownedGamesMetadata')
})

const mapDispatchToProps = dispatch => ({
  getOwnedGames () { dispatch(getOwnedGames()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView)
