import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby";

import './sidebar.css'

import Logo from '../logo'




const Layout = () => {
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
  const menuItemsData = data.strapi.pages.data.filter(page => page.attributes.onsidebar);


  const hasLogoImg = (data.site.siteMetadata?.logo || '').length > 0;
  const isIndexLocation = window.location.pathname === '/';

  return (
    <div className={`sidebar-wrapper ${isIndexLocation ? 'white' : 'black'}`}>
      <header className="sidebar-header">
        {hasLogoImg && <img src={data.site.siteMetadata.logo} alt={data.site.siteMetadata.title} />}
        {!hasLogoImg && <Logo />}
        <h3 style={{ marginTop: '10px' }}>{data.site.siteMetadata?.title || `Title`}</h3>
      </header>
      <nav className="sidebar-nav">
        <ul>
          {menuItemsData.map(page => (<li><Link to={page.attributes.url}>{page.attributes.title}</Link></li>))}
        </ul>
      </nav>
      <footer>
        © {new Date().getFullYear()}, Customer-name
      </footer>
    </div >
  )
}

export default Layout