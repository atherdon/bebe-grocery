import React from 'react'
import Link  from 'gatsby-link'
// import logo1 from '../assets/images/Logos-01.png'
import logo1 from '../../assets/images/Logos-04.png'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo">
          <strong>Groceristar</strong>
           <span>Groceristar</span>

          {/*siteTitle*/}


          {/*<img style={{
            width:'200px',

        }}
             src={logo1}
             className="img img-responsive pull-left"
             alt="Groceristar logo" />
*/}
        </Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">
              Menu
            </a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Header
