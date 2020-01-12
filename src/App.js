import React from "react"
import Titels from "./Components/Title"
import Form from "./Components/Form"
import Weather from "./Components/Weather"

const API_key = "961cd45b0c76819135b50d3b6d1590c8";


class App extends React.Component{

    state ={
        temperature0 : undefined,
        temperature1 : undefined,
        temperature2 : undefined,
        pressure : undefined,
        humidity : undefined,
        windspeed: undefined,
        direction: undefined,
        precipitation : undefined

    }

    calDeg(temperature){
        let degree = Math.floor(temperature-273.15);
        return degree
    }

    getWeather = async (e) => {
        e.preventDefault();
        var city = e.target.elements.city.value;
        var country = e.target.elements.country.value;
       

        if (city && country){

            
    
            //const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);
            const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=961cd45b0c76819135b50d3b6d1590c8`);
            const weather_data = await api_call.json();
            console.log(weather_data);
    
            let tm1 = weather_data.list[0].main.temp;
            let tm2 = weather_data.list[1].main.temp;
            let tm3 = weather_data.list[2].main.temp;
            
            this.setState({

                date0 : weather_data.list[0].dt_txt,
                date1 : weather_data.list[1].dt_txt,
                date2 : weather_data.list[2].dt_txt, 

                temperature0 : this.calDeg(tm1),
                temperature1 : this.calDeg(tm2),
                temperature2 : this.calDeg(tm3),

                pressure0 : weather_data.list[0].main.pressure,
                pressure1 : weather_data.list[1].main.pressure,
                pressure2 : weather_data.list[2].main.pressure,

                humidity0 : weather_data.list[0].main.humidity,
                humidity1 : weather_data.list[1].main.humidity,
                humidity2 : weather_data.list[2].main.humidity,

                windspeed0 : weather_data.list[0].wind.speed,
                windspeed1 : weather_data.list[1].wind.speed,
                windspeed2 : weather_data.list[2].wind.speed,

                

                
                
                //pressure : weather_data.main.pressure,
                //humidity : weather_data.main.humidity,
                //windspeed : weather_data.wind.speed, 
            }); 
        }
    }

    render(){
        if (this.state.temperature0 == undefined) {
            console.log("aaaa",this.state.temperature0);

            return(
            <div>
                <Titels />
                <Form getWeather={this.getWeather}/>
            </div>
            );
        }else
        return(
            <div>
                <Titels />
                <Form getWeather={this.getWeather}/>
                <Weather 
                    date0 = {this.state.date0}
                    date1 = {this.state.date1}
                    date2 = {this.state.date2}
            
                    temperature0 = {this.state.temperature0}
                    temperature1 = {this.state.temperature1}
                    temperature2 = {this.state.temperature2}

                    pressure0 = {this.state.pressure0}
                    pressure1 = {this.state.pressure1}
                    pressure2 = {this.state.pressure2}

                    humidity0 = {this.state.humidity0}
                    humidity1 = {this.state.humidity1}
                    humidity2 = {this.state.humidity2}

                    windspeed0 = {this.state.windspeed0}
                    windspeed1 = {this.state.windspeed1}
                    windspeed2 = {this.state.windspeed2}
                />
            </div>
        );
    }
}

export default App;
