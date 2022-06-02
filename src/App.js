import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import OtherInfo from './components/OtherInfo/OtherInfo';


const API_KEY = 'b967db2f7084408fb6f185757220206&q'

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        feels_like: undefined,
        main: undefined,
        wind: undefined,
        pressure: undefined,
        humidity: undefined,
        error: undefined
    };

    getCurrentWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        
        if (city) {
            const apiUrl = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}=${city}&aqi=no`);
            const data = await apiUrl.json();
            console.log(data);

            this.setState({
                temp: data.current.temp_c,
                city: data.location.name,
                feels_like: data.current.feelslike_c,
                main: data.current.condition.text,
                wind: data.current.wind_kph,
                pressure: data.current.pressure_mb,
                humidity: data.current.humidity,
                error: undefined,
            }) 
        } else {
            this.setState({
                temp: undefined,
                city: undefined,
                feels_like: undefined,
                main: undefined,
                wind: undefined,
                pressure: undefined,
                humidity: undefined,
                error: 'Enter city!',
            }) 
        }
       
    }

    render() {
        return (
            <div className='app'>
                <Header
                    getWeather={this.getCurrentWeather}
                />
                <Info 
                    temp={this.state.temp}
                    city={this.state.city}
                    feels_like={this.state.feels_like}
                    main={this.state.main}
                />
                <OtherInfo
                    wind={this.state.wind}
                    pressure={this.state.pressure}
                    humidity={this.state.humidity} 
                />
            </div>
        );
    }
};

export default App;
