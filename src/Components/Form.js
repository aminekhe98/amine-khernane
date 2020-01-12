import React from "react"

class Form extends React.Component{

    render(){
        return(
            <div class="affichage">
               <form onSubmit={this.props.getWeather}>
                   <input class="form-control" type="text" name="city" placeholder="Your city"/>
                   <input class="form-control" type="text" name="country" placeholder="Your contry"/>
                   <button id="a"class="btn btn-success">GO</button>
               </form>
            </div>
        );
    }
}

export default Form;
