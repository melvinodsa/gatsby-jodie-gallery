import PropTypes from "prop-types"
import * as React from "react"

import { Link } from "gatsby"


const Tile = ({ tile }) => {
    return <Link className="zoom" to={tile.link} style={{
        width: `${tile.width * 100 / 6}%`,
        height: `${tile.height * 25}vh`,
        textAlign: 'right',
        display: 'flex',
        textDecoration: 'none',
    }}>
        <img style={{
            width: '100%',
            height: '100%',
            objectFit: `cover`,
            backgroundRepeat: 'no-repeat',
            transition: 'all .5s',
            marginBottom: '0',
            zIndex: '5',
        }} src={tile.image} />
        <span style={{
            color: 'white',
            fontWeight: 700,
            fontSize: '35px',
            margin: '20px',
            textShadow: 'hsl(0deg 0% 0% / 50%) 0px 0px 2px',
            marginLeft: `calc(-100% + 20px)`,
            zIndex: '10',
        }}>{tile.title}</span>
    </Link>
}

Tile.propTypes = {
    tile: PropTypes.object.isRequired,
}

export default Tile;