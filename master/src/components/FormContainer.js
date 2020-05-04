import React from "react";
import FormComponent from "./FormComponent";

class FormContainer extends React.Component{
    constructor()  {
        super()
        this.state = {
            loading: false,            
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
    render(){   
        return(    
        <FormComponent 
            handleChange={this.handleChange}
            data={this.state}
        />
        )
    }

}
export default FormContainer