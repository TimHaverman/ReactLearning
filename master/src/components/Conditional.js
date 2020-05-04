import React from "react";

function Conditional(props) { // this should be in App. it is convention for App to maintain what is being rendered
    return(
        <div>
            <h3>This is here to demonstrate we can have part of this conditionally render</h3>

            {props.isLoading ? <h1>Loading...</h1> : <h1>Finished Loading now some other s**t happens</h1>}

            <h3>While other parts staticly render</h3>
        </div>
    )    
}export default Conditional