import React from 'react'
import Router from 'next/router'

class Error extends React.Component {
  static getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location: '/',
      })
      res.end()
    } else {
      Router.push('/')
    }
    return {}
  }

  render() {
    return null
  }
}

export default Error
