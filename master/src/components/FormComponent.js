import React from "react";
function FormComponent(props){
    return(
        <div>
            <form>
                <input
                    type="test"
                    value={props.data.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={props.handleChange}
                />      
                <br />               
                <input 
                    type="test"
                    value={props.data.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={props.handleChange}
                />
                <br />

                <textarea 
                    value={props.data.value} 
                    onChange={props.handleChange}
                />

                <br />

                <label>
                    <input 
                        type="checkbox"
                        name="isFriendly"
                        checked={props.data.isFriendly}
                        onChange={props.handleChange}
                    /> Is friendly ?
                </label>
                <br />
                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="male"
                        checked={props.data.gender === "male"}
                        onChange={props.handleChange}
                    /> Male
                </label>
                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="female"
                        checked={props.data.gender === "female"}
                        onChange={props.handleChange}
                    /> Female
                </label>
                <br />
                <label>Favorite Color: </label>
                <select
                    value={props.data.favColor}
                    onChange={props.handleChange}
                    name="favColor"                    
                >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>

                </select>
                <h3>{props.data.firstName} {props.data.lastName}</h3>
                <button>Submit</button>
            </form>           
        </div> // Formik <button>Sumbit</button> works the same as ,<input type="submit" value="Submit" />, when it is inside of a form
    )
}
export default FormComponent