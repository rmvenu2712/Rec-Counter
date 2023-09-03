import React from "react"



// Function componet
// function Child(Props){
//     return(
//         <>
//          <h2>hello{Props.name}</h2> 

//         <button onClick={Props.btn}>Child button</button>
//         </>
//     )
// }
// export default Child;

class Child extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
       <>
       
     <button className="parrent" onClick={this.props.name}>Click</button>       
       </>

        );
    }
}export default Child;