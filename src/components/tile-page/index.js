import PropTypes from "prop-types"
import * as React from "react"

import Tile from './tile'
import './tile-page.css'


const TilePage = ({ tiles }) => {
    return <div style={{ width: 'calc(100vw - 320px)', display: 'flex', flexWrap: 'wrap' }}>
        {tiles.map(tile => <Tile tile={tile} />)}
    </div>
}

TilePage.propTypes = {
    tiles: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TilePage;