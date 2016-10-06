const React = require('react')
const axios = require('axios')
const { number } = React.PropTypes

const Story = React.createClass({
  getInitialState () {
    return {
      story: {}
    }
  },
  propTypes: {
    id: number
  },
  componentDidMount () {
    axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json?print=pretty`)
    .then((res) => {
      this.setState({
        story: res.data || {}
      })
    })
  },
  render () {
    const { by, score, time, title, url, descendants } = this.state.story
    const readableTime = Math.floor((new Date().getTime() - time * 1000) / 3600000)
    return (
      <li className='ListItem'>
        <div className="Item__title">
          <a href={url}>{title}</a>
        </div>
        <div className="Item__meta">
          <span className="Item__score">{score} points </span>
          <span className="Item__bt">by {by} </span>
          <time className='Item__time'>{readableTime + ' hours ago '} </time>
          <span>{descendants} comments</span>
        </div>
      </li>
    )
  }

})

module.exports = Story
