exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const { data, errors } = await graphql(GET_ALL_PAGES_QUERY)
  if (errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi articles`,
      errors
    )
    return
  }
  data.strapi.pages.data.forEach(page => {
    createPage({
      path: page.attributes.url,
      component: require.resolve("./src/templates/page.js"),
      context: {
        id: page.id,
      },
    })
  });
}

const GET_ALL_PAGES_QUERY = `
{ 
  strapi {
    pages {
      data {
        id,
        attributes {
          title,
          url,
          pagetype,
          onsidebar,
          blog {
            title,
            data,
          },
          tiles {
            title,
            width,
            height,
            caption,
            image {
              data {
                attributes {
                  url,
                }
              }
            },
            url: page {
              data {
                attributes {
                  url,
                }
              }
            }
          },
        }
      }
    }
  }
}`
