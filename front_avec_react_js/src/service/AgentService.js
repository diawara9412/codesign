import React, { Component } from 'react';

class AgentService extends Component {
    constructor(props) {
        super(props);
        this.state={
            conter:0
        }
    }
    compter=(p)=>{
     let sign =p=='+'?1:-1
     let incr=this.state.conter+sign
     this.setState({
        conter:incr
     })
    }
    
    render() {
        return (
            
            <div>
                <span>{this.props.title}:{this.state.conter}</span>
            <img width={100} src={this.props.image}></img> 
            <button onClick={()=>this.compter('+')}></button>
            <button onClick={()=>this.compter('-')}></button>

            </div>
        );
    }
}

export default AgentService;