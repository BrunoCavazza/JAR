import React, { Component } from 'react'
import { Button } from '../Button'
import { MenuItems } from "./MenuItems"
import './Navbar.css'

class Navbar extends Component{
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbarLogo">JAR</h1>
                <div className="menuIcon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'navMenu active' : 'navMenu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <Button><a href="#">Inscribirse</a></Button>
            </nav>
        )
    }
}

export default Navbar