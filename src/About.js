import React from "react";
import './App.css';
class About extends React.Component{
    constructor(){
        super();
        // console.warn("constructor");
        // this.state={
        //     name:"priya",
        //     age:"24"
        // }
    }
    componentDidMount(){
        console.warn("props",this.props.name)
        // console.warn("didmount");
    }
    componentDidUpdate(){
        console.warn("props",this.props.name)
        // alert("name is updated");
    }
    render(){
        return(

            <div><h1>About Us Page</h1>
            <h2>{this.props.name}</h2>
            
             {/* //* <h1>{this.state.name}</h1>
            // <h1>{this.state.age}</h1>
            // <button onClick={()=>{this.setState({name:'priya khurde'})}} >Update State</button> */}
         </div>
        )
    }
}
export default About;