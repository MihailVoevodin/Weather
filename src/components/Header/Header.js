import React from "react";
import './header.css';
import logo from '../../assets/icons/logo.png';

class Header extends React.Component {

    

    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="header__wrapper">
                    <img className="logo" src={logo} alt="logo" />
                        <div className="header__title">Weather</div> 
                    </div>

                    <form className="header__form" onSubmit={this.props.getWeather}>
                        <input className="header__input" type="text" name="city" placeholder="Enter city" />
                        <button className="header__btn">Get weather</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Header;