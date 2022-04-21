import * as React from "react"
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './sidebar.css'

import Logo from '../logo'
import { isIndexLocation, isSizeLargeScreen, useWindowSizeChanged } from "../../utils/browser";


const Sidebar = ({ isOpen, setIsOpen }) => {
  const data = useStaticQuery(graphql`
     query SiteQuery {
       site {
         siteMetadata {
           title
           logo
         }
       }
       strapi {
        pages {
          data {
            id,
            attributes {
              title,
              url,
              onsidebar,
            }
          }
        }
      }
     }
   `)
  const size = useWindowSizeChanged()
  const isLargeScreen = isSizeLargeScreen(size);
  if (!isLargeScreen && isOpen && size.changed) {
    setIsOpen(false);
  }
  const menuItemsData = data.strapi.pages.data.filter(page => page.attributes.onsidebar);


  const hasLogoImg = (data.site.siteMetadata?.logo || '').length > 0;

  return (
    <div className={`sidebar-wrapper ${isIndexLocation() ? 'white' : 'black'} ${!isOpen && 'closed'}`}>
      <header className="sidebar-header">
        <div role="button" className="sidebar-nav-icon" onClick={() => { setIsOpen(!isOpen) }}> <FontAwesomeIcon icon={faBars} /></div>
        {hasLogoImg && <img style={{ display: `${isOpen ? 'block' : 'none'}` }} src={data.site.siteMetadata.logo} alt={data.site.siteMetadata.title} />}
        {!hasLogoImg && <Logo visible={isOpen} />}
        <h3 style={{ display: `${isOpen ? 'block' : 'none'}`, marginTop: '10px' }}>{data.site.siteMetadata?.title || `Title`}</h3>
      </header>
      <nav className={`sidebar-nav ${!isOpen && 'closed'}`}>
        <ul>
          {menuItemsData.map(page => (<li key={page.attributes.url}><Link to={page.attributes.url}>{page.attributes.title}</Link></li>))}
        </ul>
      </nav>
      <footer style={{ display: `${isOpen ? 'block' : 'none'}` }}>
        © {new Date().getFullYear()}, Customer-name
      </footer>
    </div >
  )
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
}

export default Sidebar