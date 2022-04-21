import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import TilePage from "../components/tile-page"
import BlogPage from "../components/blog"





const Page = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cdnUrl = process.env.CDN_URL || 'https://portfolio.melvindavis.me';
  const tiles = data.strapi.page.data.attributes.tiles.map(
    tile => {
      return {
        title: tile.title?.data?.attributes?.title,
        width: tile.width,
        height: tile.height,
        image: `${cdnUrl}${tile.image.data.attributes.url}`,
        link: tile.url.data.attributes.url,
        caption: tile.caption,
      }
    }
  );
  const hasTiles = data.strapi.page.data.attributes.tiles.length > 0;
  const hasBlog = data.strapi.page.data.attributes.blog && !hasTiles;
  const blog = data.strapi.page.data.attributes.blog || { data: "", title: "" };
  blog.data = blog.data.replaceAll('(/uploads/', `(${cdnUrl}/uploads/`);
  return (
    <Layout isOpen={isOpen} setIsOpen={setIsOpen}>
      <Seo title={data.strapi.page.data.attributes.title} />
      {hasTiles && <TilePage isOpen={isOpen} tiles={tiles}></TilePage>}
      {hasBlog && <BlogPage isOpen={isOpen} blog={blog} />}
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
                  title {
                    data {
                      attributes {
                        title,
                      }
                    }
                  }
                  width
                  height
                  caption
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
