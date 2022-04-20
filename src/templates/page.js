import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TilePage from "../components/tile-page"
import BlogPage from "../components/blog"





const Page = ({ data }) => {
    const tiles = data.strapi.page.data.attributes.tiles.map(
        tile => {
            return {
                title: tile.title,
                width: tile.width,
                height: tile.height,
                image: `${process.env.GRAPHQL_URL}${tile.image.data.attributes.url}`,
                link: tile.url.data.attributes.url,
            }
        }
    );
    const hasTiles = data.strapi.page.data.attributes.tiles.length > 0;
    const hasBlog = data.strapi.page.data.attributes.blog && !hasTiles;
    return (
        <Layout>
            <Seo title={data.strapi.page.data.attributes.title} />
            {hasTiles && <TilePage tiles={tiles}></TilePage>}
            {hasBlog && <BlogPage blog={data.strapi.page.data.attributes.blog} />}
        </Layout>
    )
}

export const query = graphql`
  query PageQuery($id: ID) {
    strapi {
        page(id: $id) {
            data {
              id
              attributes {
                title
                url
                pagetype
                blog {
                  title
                  data
                }
                tiles {
                  title
                  width
                  height
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  url: page {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
    }
}`

export default Page
