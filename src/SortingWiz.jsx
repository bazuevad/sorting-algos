import React from 'react';
import './barsStyle.css';
import {mergeSortAlgo} from './Algorithms.js';
import {bubbleSortAlgo} from './Algorithms.js';

class SortingWiz extends React.Component{
    //creating constructor
    constructor(props){
        super(props);
        //initializing local state
        this.state = {array:[] };

    }

    componentDidMount(){
        this.newArray();
    }
    bubbleSort(array){
        const animations = bubbleSortAlgo(this.state.array);
        //console.log(animations);
        for(let i = 0; i<animations.length;i++){
            console.log(animations[i]);
            const arrayBars = document.getElementsByClassName('array-bars');
            
            if(i%3===0){
                const [barOne,barTwo] = animations[i];
                const barOneStyle = arrayBars[barOne].style;
                const barTwoStyle = arrayBars[barTwo].style;
                setTimeout(()=>{
                    barOneStyle.backgroundColor = '#ff8c00';
                    barTwoStyle.backgroundColor = '#ff8c00';
                },i*1);
            }
            else if(i%3===1){
                const[barOne, barOneHeight] = animations[i];
                const[barTwo, barTwoHeight] = animations[i+1];
                const barOneStyle = arrayBars[barOne].style;
                const barTwoStyle = arrayBars[barTwo].style;
                setTimeout(()=>{
                    barOneStyle.height = `${barOneHeight}px`;
                    barOneStyle.backgroundColor = '#b34cf4';
                    barTwoStyle.height = `${barTwoHeight}px`;
                    barTwoStyle.backgroundColor = '#b34cf4';
                },i*1);
            }
        }
    }
    mergeSort(array){
        const animations = mergeSortAlgo(this.state.array);
        for(let i = 0; i <animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bars');
            //considering animations that happen before the values were "swaped"
            if(i%3!==2){
                const [barOne, barTwo] = animations[i];
                //if annimation is the one after the values were swapped 
                const barOneStyle = arrayBars[barOne].style;
                //console.log(arrayBars[barTwo]);
                const barTwoStyle = arrayBars[barTwo].style;
                
                if(i%3===0){
                    setTimeout(() => {
                        barOneStyle.backgroundColor = '#ff8c00';
                        barTwoStyle.backgroundColor = '#ff8c00';
                      }, i * 1);
                }
                else{
                    setTimeout(() => {
                        barOneStyle.backgroundColor = '#b34cf4';
                        barTwoStyle.backgroundColor = '#b34cf4';
                      }, i * 1); 
                }
            }
            else{
                setTimeout(() => {
                    const [barOneindx, newHeight] = animations[i];
                    //const barOneStyle = arrayBars[barOneIdx].style;
                    const barOneStyle = arrayBars[barOneindx].style;
                    barOneStyle.height = `${newHeight}px`;
                    //barOneStyle.height = `${newHeight}px`;
                  }, i * 1);
            }
        }
    }
    newArray(){
        const array = [];
        for(let i = 0; i<200;i++){
            var randomNum = Math.floor((Math.random()*((700-10)+1))+10);
            array.push(randomNum);
        }
        this.setState({array});
    }
    render(){
        const{array} = this.state;
        return (
            <div className="graph">
            {array.map((value,idx)=>(
                 <div className = "array-bars"
                    style={{height: `${value}px`}}>
                </div>
            ))}
            <button onClick={() => this.newArray()}> Generate New Array </button>
            <button className="mergeSort" onClick={() => this.mergeSort()}> Merge Sort</button>
            <button className = "bubbleSort" onClick = {()=>this.bubbleSort()}>Bubble Sort</button>
            </div>
        );
    }

}

export default SortingWiz;