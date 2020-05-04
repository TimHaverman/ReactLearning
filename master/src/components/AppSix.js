import React from "react"
import Conditional from "./Conditional"

class AppSix extends React.Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn: true,
            count: 0,
            isLoading: true              
        }
        this.handleClick = this.handleClick.bind(this)
        this.buttonPress = this.buttonPress.bind(this)                  
    }

    handleClick() {
        this.setState(prevState =>{
            return{
                count: prevState.count + 1
            }
        })
    }
    buttonPress() {
        this.setState(prevState =>{
            return{
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }

    //OLD Lifecycle Methods info at --- https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
    /* static getDerivedStateFromProps() {// has arguments (props, state)
        // return the new, updated state based upon the props
        // https://reactje.org/docs/react-components.html#static-getderivedstatefromprops
        // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
        // react team does not think this should be used much
        // rare cases when the child's props need to update based upon old state and new props
    }
    getSnapshotBeforeUpdate(){
        // create a backup of the current way things are -- like an object with the current state of variable in that component
        // https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
    } */
    componentDidMount(){ //used often when needing to get info from external scource like an api call
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }
  /*   componentWillReceiveProps(){
        // if (nextProps.whatever !== this.props.whatever){ do stuff in side } --- this is often used like this
        // legacy code good to understand
        // this lifecycle method is called everytime props are passed from parent to child and the first time something is rendered
    }
    shouldComponentUpdate(){ //often has arguments (nextProps, nextState) 
        // return true if an update is wanted
        // return false if not
        // this is used to determine what needs to be rerendered
        // this component is very useful for helping large programs run faster

    }
    componentWillUnmount(){ //used for clean up or teardown
        // removed code before component disappears
        // remove event listener is an example
    } */

    

    render(){
        let wordDisplay;
        let wordButtonInOut;
        if(this.state.isLoggedIn){
            wordDisplay = "You are currently logged in";
            wordButtonInOut = "Log out";
        }
        else{
            wordDisplay = "You are currently logged out";
            wordButtonInOut = "Log in";
        }
        return(
            <div>
                <h1>{wordDisplay} <button onClick={this.buttonPress}>{wordButtonInOut}</button></h1>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
                <Conditional isLoading={this.state.isLoading}/>
            </div>
        )
    }      
}

export default AppSix