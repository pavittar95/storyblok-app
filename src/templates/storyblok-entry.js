import React from "react"
import Components from "../components/components"

class StoryBlokEntry extends React.Component {
  static prepareStory(props) {
    const story = Object.assign({}, props.pageContext.story)
    story.content = JSON.parse(story.content)

    return {
      story,
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      ...StoryBlokEntry.prepareStory(props),
    }
  }

  render() {
    let content = {
      ...this.state.story.content,
      // Remove `header` from component list
    }

    return (
      <div>
        Home page is this
        {React.createElement(Components(content.component), {
          key: content._uid,
          blok: content,
          ...content,
        })}
      </div>
    )
  }
}

export default StoryBlokEntry
