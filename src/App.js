import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import OtherInfo from './components/OtherInfo/OtherInfo';


const API_KEY = '0a83a2dc2be5bb2659f228e1a7d5fa3e'

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
            const apiUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            const data = await apiUrl.json();
            console.log(data);

            this.setState({
                temp: data.main.temp,
                city: data.name,
                feels_like: data.main.feels_like,
                main: data.weather[0].main,
                wind: data.wind.speed,
                pressure: data.main.pressure,
                humidity: data.main.humidity,
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
                error: 'Введите город',
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
