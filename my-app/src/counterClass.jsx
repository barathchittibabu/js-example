import React,{Component} from 'react';

class Counter extends Component
   {
       constructor()
        {
           super();
           this.state={
               count : 0
           }
        }
        handleDecreament = ()=>{
            this.setState({
                count : this.state.count - 1
            })
        }
        handleIncreament = ()=>{
            this.setState({
                count : this.state.count + 1
            })
        }
        handleReset = ()=>{
            this.setState({
                count : 0
            })
        }

       render()
        {
            
        return(
            <div style={{color:"red", paddingLeft:"590px",paddingTop:"100px",fontSize:"40px",backgroundColor:'wheat'}}>
            <h1 style={{paddingLeft:"85px"}}>{this.state.count}</h1>
            <button style={{fontSize:"20px" , padding:"10px",borderRadius:"20px" }} onClick={this.handleDecreament}>Minus</button>
            <button style={{fontSize:"20px" , padding:"10px",borderRadius:"20px"}} onClick={this.handleIncreament}>Plus</button>
            <button style={{fontSize:"20px" , padding:"10px",borderRadius:"20px"}} onClick={this.handleReset}>Reset</button>
            </div>  
        )
    }
}

export default Counter; 