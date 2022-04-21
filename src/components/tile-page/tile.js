import PropTypes from "prop-types"
import * as React from "react"

import { Link } from "gatsby"
import { useIsLargeScreen } from "../../utils/browser";


const Tile = ({ tile }) => {
    const isLargeScreen = useIsLargeScreen();
    const width = isLargeScreen ? `${tile.width * 100 / 6}%` : '100%';
    const alignItems = isLargeScreen ? 'flex-start' : 'center';
    return <Link className="zoom" to={tile.link} style={{
        width: `${width}`,
        height: `${tile.height * 25}vh`,
        textAlign: 'right',
        display: 'flex',
        alignItems: alignItems,
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
        }} src={tile.image} alt={tile.caption} />
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