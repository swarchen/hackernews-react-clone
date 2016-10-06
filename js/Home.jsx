const React = require('react')
const axios = require('axios')
const Stroy = require('./Story')

const Home = React.createClass({
  getInitialState () {
    return {
      news: []
    }
  },
  componentDidMount () {
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then((response) => {
      const stories = response.data.slice(0, 30) || []
      this.setState({
        news: stories
      })
    })
  },
  render () {
    return (
      <div className="App__wrap">
        <header className='App__header'>Hacker news</header>
        <div className='App__content'>
          <div className='Items'>
            <ol className="Items__list">
              {this.state.news.map((id) => (
                <Stroy id={id} key={id} />
              ))}
            </ol>
          </div>
        </div>
        <footer className='App__footer'>
          <span>Style reference from <a href="https://github.com/insin/react-hn">insin/react-hn</a></span>
        </footer>
      </div>
    )
  }

})

module.exports = Home
