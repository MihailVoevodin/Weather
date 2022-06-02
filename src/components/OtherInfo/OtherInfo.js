import React from "react";
import './otherinfo.css';


class OtherInfo extends React.Component {

    render() {
        return(
            <div>
                {this.props.wind &&
                    <div className="other__info">
                        <div className="wind"><span>Wind</span>{(this.props.wind * 0.278).toFixed(2)} m/s</div>
                        <div className="pressure"><span>Pressure</span>{this.props.pressure} hPa</div>
                        <div className="humidity"><span>Humidity</span>{this.props.humidity} %</div>
                    </div>
                }
                
            </div>
        )
    }
}

export default OtherInfo;