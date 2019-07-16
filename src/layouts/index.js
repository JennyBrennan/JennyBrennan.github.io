import React from 'react'
import Link from 'gatsby-link'
import "./style.css"

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let nav
    let footer

    nav = (
      <nav>
          <ul>
              <li className="push-left"><Link to={'/'} >Jenny Brennan</Link></li>
              <li><Link to={'/projects'} >Projects</Link></li>
              <li><Link to={'/blog'} >Blog</Link></li>
              <li><Link to={'/about'} >About</Link></li>
          </ul>
      </nav>
    )

    footer = (
      <footer>
        <a href="/">About</a> &#183; 
        <a href="https://twitter.com/jennyhbren"> Twitter </a> &#183; 
        <a href="mailto:hello@jennybrennan.com"> Email </a> &#183; 
        <a href="https://github.com/jennybrennan"> GitHub </a> &#183; 
        <a href="https://linkedin.com/in/jennyhbren"> LinkedIn </a> &#183; 
        <a href="https://github.com/JennyBrennan/jennybrennan.github.io"> Site source code </a>
      </footer>
    )

    return (
      <div>
        {nav}
        {children()}
        {footer}
      </div>
    )
  }
}

export default Template
