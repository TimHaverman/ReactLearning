import React from "react";
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkingGlobalScope/fetch
// https://swapi.co/   starwars api
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261
// https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
class AppSeven extends React.Component{
    constructor()  {
        super()
        this.state = {
            loading: false,
            character: {}, 
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: "",
            favColor: "",


        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const {name, value, type, checked} = event.target // this is should help with some errors that can occur and help debug when they do happen
        type === "checkbox" ? this.setState({ [name]: checked }) :this.setState({[name]: value})
    }
    handleSubmit(event){
        
    }

    componentDidMount(){
        this.setState({loading: true})
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data =>{
                this.setState({
                    loading: false,
                    character: data,
                  
                })
            })
    } 


    render(){
        const text = this.state.loading ? "loading...." : this.state.character.name;
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.firstName} 
                        name="firstName" 
                        placeholder="First Name" 
                        onChange={this.handleChange}
                    />      
                    <br />               
                    <input 
                        type="text"
                        value={this.state.lastName} 
                        name="lastName" 
                        placeholder="Last Name" 
                        onChange={this.handleChange}
                    />
                    <br />

                    <textarea 
                        value={this.state.value} 
                        onChange={this.handleChange}
                    />

                    <br />

                    <label>
                        <input 
                            type="checkbox"
                            name="isFriendly"
                            checked={this.state.isFriendly}
                            onChange={this.handleChange}
                        /> Is friendly ?
                    </label>
                    <br />
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> Male
                    </label>
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> Female
                    </label>
                    <br />
                    <label>Favorite Color: </label>
                    <select
                        value={this.state.favColor}
                        onChange={this.handleChange}
                        name="favColor"                    
                    >
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>

                    </select>
                    <h3>{this.state.firstName} {this.state.lastName}</h3>
                    <button>Submit</button>
                </form>
            
                <p>{text}</p>
                <p>{this.state.character.height}</p>
                <a href={this.state.character.url} alt={this.state.character.name}>Here is the url?</a>
            </div> // Formik <button>Sumbit</button> works the same as ,<input type="submit" value="Submit" />, when it is inside of a form
        )
    }

}
export default AppSeven