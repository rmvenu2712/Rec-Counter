import React,{ Component } from'react';
import { AiOutlineReload} from "react-icons/ai";
import'./Counter.css'

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count :0,
        };
    }
increment =()=>{
    this.setState({ count: this.state.count + 1});
};
decrement =()=>{
    this.setState({ count: this.state.count - 1});
};  
reset=()=>{
    this.setState({count: this.state.count = 0});
}
render(){
    return(
        <>
               <header>  <h1 >Counter</h1><small>(React)</small>
       </header>
        <div className='Container-Count'>
            <div className='Mini-Container'>
             <div className='Sub-Container'>
          <h1 className='head'>{this.state.count}</h1> 
          </div> 

       <div className='buttons-group'>
       {/* <div className='con-btn'> */}
         <button className='button1'  onClick={this.decrement}>-</button>    
      
         
        
      <button className='button2'  type='reset' onClick={this.reset}><AiOutlineReload/></button>

        
        
         <button className='button3' onClick={this.increment}>+</button>
                
           </div>
           </div>
     </div> 
        <footer> <a href='www.github.com'>View Source Code</a></footer>
        </> 
    )
}

}
export default Counter;