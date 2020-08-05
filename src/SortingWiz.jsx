import React from 'react';
import './barsStyle.css';

class SortingWiz extends React.Component{
    //creating constructor
    constructor(props){
        super(props);
        //initializing local state
        this.state = {hi:[] };

    }

    componentDidMount(){
        this.newArray();
    }

    newArray(){
        const hi = [];
        for(let i = 0; i<100;i++){
            var randomNum = Math.floor((Math.random()*((1000-10)+1))+10);
            hi.push(randomNum);
        }
        this.setState({hi});
    }
    render(){
        const{hi} = this.state;
        return (
            <div className="graph">
            {hi.map((value,idx)=>(
                 <div className = "array-bars"
                    style={{height: `${value}px`}}>
                </div>
            ))}
            </div>
        );
    }

}

export default SortingWiz;