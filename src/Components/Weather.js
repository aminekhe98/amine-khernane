import React from "react";


class Weather extends React.Component{

    render(){
        return(
            <div class="container">
                <div class="card">
                        
                    <div class="souscontainr">
                        {this.props.date0 && <p> {this.props.date0}</p>}  
                        {this.props.temperature0 && <p>temperature: {this.props.temperature0}</p>}
                        {this.props.pressure0 && <p>Pressure: {this.props.pressure0}</p>}
                        {this.props.humidity0 && <p>Humidity: {this.props.humidity0}</p>}
                        {this.props.windspeed0 && <p>Wind speed: {this.props.windspeed0}</p>}
                    </div> 
                </div >
                <div class="card">
                    <div class="souscontainr">
                        {this.props.date1 && <p> {this.props.date1}</p>}
                        {this.props.temperature1 && <p>temperature: {this.props.temperature1}</p>}
                        {this.props.pressure1 && <p>Pressure: {this.props.pressure1}</p>}
                        {this.props.humidity1 && <p>Humidity: {this.props.humidity1}</p>}
                        {this.props.windspeed1 && <p>Wind speed: {this.props.windspeed1}</p>}
                    </div> 
                </div>
                <div class="card">
                    <div class="souscontainr">
                        {this.props.date2 && <p> {this.props.date2}</p>}    
                        {this.props.temperature2 && <p>temperature: {this.props.temperature2}</p>}
                        {this.props.pressure2 && <p>Pressure: {this.props.pressure2}</p>}
                        {this.props.humidity2 && <p>Humidity: {this.props.humidity2}</p>}
                        {this.props.windspeed2 && <p>Wind speed: {this.props.windspeed2}</p>} 
                    </div>                 
                </div>         
            </div>
        );
    }
}

export default Weather;
