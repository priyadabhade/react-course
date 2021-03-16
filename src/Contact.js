import react,{useEffect,useState} from "react";
function Contact(props) {
    // const[name,setName]=useState("priya");
    // const[age,setAge]=useState(24);
   useEffect(()=>{
       console.warn("check props ",props.name)
   })
   let data="contact us component";
   const [val,setVal]=useState("priya")
   const test =(e)=>
   {
     console.warn("test function",e.target.value);
}
    return(
        <div><h1>{data}</h1>
        {/* <input type="text" value={val} onChange={test}></input>
        <button onClick={}>
            Click me</button>
        {/* {name} */}
        {/* {age}
        <button onClick={()=>setAge(30)}>Update Age</button>
        <button onClick={()=>setName("priya khurde")}>update name</button> */} */}
        </div>
    )
}
export default Contact;