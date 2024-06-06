// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationList} = this.props

    const searchResults = destinationList.filter(eachDest =>
      eachDest.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-cont">
        <div className="search-cont">
          <h1 className="head">Destination Search</h1>
          <div className="input-cont">
            <input
              type="search"
              className="input"
              placeholder="Search"
              value={searchInput}
              onChange={this.onChangeSearch}
            />
            <img
              className="icon"
              alt="search icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            />
          </div>
          <ul className="dest-list">
            {searchResults.map(each => (
              <DestinationItem key={each.id} details={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
