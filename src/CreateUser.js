import { Button } from 'react-bootstrap';
import React  from 'react';
import{useState} from 'react';
function CreateUser(){
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[address,setAddress]=useState("");
    function makeuser(){
        let data={name,age,address}
        console.warn("called",data);
    }
    return(
        <div>
            <h1>make a new User</h1>
            <input type="text" onChange={(e)=>setName(e.target.value)}
            name="username" value={name}/><br></br>
            <input type="text"  onChange={(e)=>setAge(e.target.value)}
            name="age" value={age}/><br></br>
            <input type="text" name="address" onChange={(e)=>setAddress(e.target.value)} value={address}/><br></br>
            <Button onClick={makeuser}>Create user</Button>
        </div>
            )
}
export default CreateUser;