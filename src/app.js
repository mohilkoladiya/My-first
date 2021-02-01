import React, { Component } from 'react'

export default class app extends Component {
  
        state={
            hobby:["singing","dancing","swiming","cricket"],
            print:[ ],
            data:[],
        }
        
    
    storedHandle=(e)=>{
        this.setState({
            print:[...this.state.print,e.target.value]
        })
    }
    submitHnadler=()=>{
       this.setState({
           data:[this.state.print]
       })
    }
    render() {
        console.log(this.state.print);
    
     return (
         <>
             <h1>select your hobby: {this.state.data.join(" , ")}</h1>
             {
                 this.state.hobby.map((item)=>{
                    return (
                    <div>
                    <input type="checkbox" value={item} onChange={this.storedHandle}/>
                    <label>{item}</label><br/>
                    </div>)
                 })
             }
             <button type="submit
             
             " onClick={this.submitHnadler}>Submit</button>
         </>
     )
    }
}
