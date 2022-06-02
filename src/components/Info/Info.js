import React from "react";
import './info.css';

class Info extends React.Component {

    render() {
        
        return (
            <div className="info">
                {this.props.city ?
                    <div>
                        <p className="info__city">{this.props.city}</p>
                        <p className="info__temp">{this.props.temp + '°'}</p>
                        <p className="info__feels">{'feels like: ' + this.props.feels_like + '°'}</p>
                        <p className="info__city">{this.props.main}</p>
                    </div> : <div className="empty">Enter city!</div>
                }
                
            </div>
        )        
    };
};

export default Info





