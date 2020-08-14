/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const storyblokEntry = path.resolve("src/templates/storyblok-entry.js")

  // querying the storyblok data from GraphQL data layer
  const result = await graphql(
    `
      query {
        allStoryblokEntry {
          edges {
            node {
              id
              name
              created_at
              uuid
              slug
              field_component
              full_slug
              content
              is_startpage
              parent_id
              group_id
            }
          }
        }
      }
    `
  )

  // creating pages using createPage function like described in the documentation
  // https://www.gatsbyjs.org/docs/programmatically-create-pages-from-data/#creating-pages
  const edges = result.data.allStoryblokEntry.edges
  console.log(result.data)

  console.log(result.data.allStoryblokEntry)

  edges.forEach(edge => {
    const full_slug = edge.node.full_slug

    console.log("pages--------------", edge.node)

    actions.createPage({
      path: `/${full_slug}`,
      component: storyblokEntry,
      context: {
        slug: full_slug,
        story: edge.node,
      },
    })
  })
}
