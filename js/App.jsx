const React = require('react')
const ReactDOM = require('react-dom')
const Home = require('./Home')

const App = React.createClass({
  render () {
    return (
      <Home />
    )
  }

})

ReactDOM.render(<App />, document.getElementById('app'))
