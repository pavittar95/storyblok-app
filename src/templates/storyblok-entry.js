import React from "react"
import Components from "../components/components"
import { graphql } from "gatsby"

export default function StoryblokEntry({ data }) {
  const story = data.storyblokEntry
  console.log(story)
  return (
    <div>
      {story.name}
      <Components />
      {/* {React.createElement(Components(content.component), {
        key: content._uid,
        blok: content,
        ...content,
      })} */}
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    storyblokEntry(slug: { eq: $slug }) {
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
`
