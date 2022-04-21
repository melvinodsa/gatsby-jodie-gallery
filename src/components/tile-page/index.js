import PropTypes from "prop-types"
import * as React from "react"

import Tile from './tile'
import './tile-page.css'


const TilePage = ({ tiles, isOpen }) => {
    return <div style={{ transition: 'width 0.2s 0.2s', width: `calc(100vw - ${isOpen ? '320px' : '40px'})`, display: 'flex', flexWrap: 'wrap', padding: '60px 40px 0px 10px' }}>
        {tiles.map(tile => <Tile key={tile.link} tile={tile} />)}
    </div>
}

TilePage.propTypes = {
    isOpen: PropTypes.bool,
    tiles: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TilePage;