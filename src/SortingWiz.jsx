import React from 'react';
import './barsStyle.css';
import ReactDOM from 'react-dom';
import {mergeSortAlgo} from './Algorithms.js';
import {bubbleSortAlgo} from './Algorithms.js';
import {insertionSortAlgo} from './Algorithms.js';
import {selectionSortAlgo} from './Algorithms.js';


class SortingWiz extends React.Component{
    //creating constructor
    constructor(props){
        super(props);
        //initializing local state
        this.state = {array:[] , running: false, speed: 20, algo: 0};
        this.handleChange = this.handleChange.bind(this);

    }

    componentDidMount(){
        this.newArray(100);

        this.initialSpeed();
        // this.initialName();
        

    }

    handleChange(evt) {
        const { newArray } = this.props;
        
        this.newArray(Math.floor((parseInt(evt.target.value) + 3) * 1.65));
        let array = this.state.array;
        
      }

    insertionSort(array){
        
        const element = <div>Insertion Sort</div>;
        ReactDOM.render(element, document.getElementById('Algo-name'));
        const element2 = <div>Insertion Sort is a simple sorting algorithm that builds the final sorted list by transferring one element at a time.</div>;
        ReactDOM.render(element2, document.getElementById('text'));
        const copy = this.state.array.slice();
        const animations = insertionSortAlgo(copy);
        const time = <div>
            <div>Worst-case time complexity:     O(n^2) </div>     
            <div>Average time complexity:	    O(n^2) </div>     
            <div>Best-case time complexity:	    O(n)  </div>    
            </div>;
        ReactDOM.render(time, document.getElementById('time'));
        for(let i = 0; i<animations.length; i++){
            let arrayBars = document.getElementsByClassName('array-bars');    
            const[barOne,barTwo, indx] = animations[i];
            //if animation is showing value before it's being replaced
            if(indx===0){
                setTimeout(()=>{
                    const barOneStyle = arrayBars[barOne].style;
                    barOneStyle.backgroundColor = '#ff8c00';
                },i*this.state.speed);
            }
            else if(indx===-1){
                setTimeout(()=>{
                    const barOneStyle = arrayBars[barOne].style;
                    barOneStyle.backgroundColor = '#b34cf4';
                },i*this.state.speed);
            }
            else{
                setTimeout(()=>{
                    const barOneIdx = arrayBars[barOne];
                    const barOneStyle = arrayBars[barOne].style;
                    barOneStyle.height = `${barTwo}px`;
                    arrayBars[barOne].value= 0;
                    barOneStyle.backgroundColor = '#b34cf4';
                },i*this.state.speed);
                

            }
        }
    }
 
    bubbleSort(array){
        const element = <div>Bubble Sort</div>;
        ReactDOM.render(element, document.getElementById('Algo-name'));
        const element2 = <div>Bubble Sort is a simple sorting algorithm that repeatedly goes through the list, compares two adjacent elements and swaps them if they are in the wrong order.This process repeats until the list is sorted.  The algorithm is simple, however it is too slow and very inefficient for most problems.</div>;
        ReactDOM.render(element2, document.getElementById('text'));
        const copy = this.state.array.slice();
        const animations = bubbleSortAlgo(copy);
        const time = <div>
            <div>Worst-case time complexity:     O(n^2) </div>     
            <div>Average time complexity:	    O(n^2) </div>     
            <div>Best-case time complexity:	    O(n)  </div>    
            </div>;
        ReactDOM.render(time, document.getElementById('time'));
        for(let i = 0; i<animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bars');
            if(i%4===0){
                
                setTimeout(()=>{
                    const [barOne,barTwo] = animations[i];
                    const barOneStyle = arrayBars[barOne].style;
                    const barTwoStyle = arrayBars[barTwo].style;
                    barOneStyle.backgroundColor = '#ff8c00';
                    barTwoStyle.backgroundColor = '#ff8c00';
                },i*this.state.speed);
            }
            else if(i%4===1){
                
                setTimeout(()=>{
                    const[barOne, barTwo] = animations[i];
                    const barOneStyle = arrayBars[barOne].style;
                    const barTwoStyle = arrayBars[barTwo].style;
                    barOneStyle.backgroundColor = '#b34cf4';
                    barTwoStyle.backgroundColor = '#b34cf4';
                    
                },i*this.state.speed);
            }
            else{
                
                setTimeout(()=>{
                    const[barOne, height] = animations[i];
                    const barOneStyle = arrayBars[barOne].style;
                    barOneStyle.height = `${height}px`;
                    barOneStyle.backgroundColor = '#b34cf4';
                },i*this.state.speed);
            }
        }
 
    }

    mergeSort(array){
       
        const element = <div>Merge Sort</div>;
        ReactDOM.render(element, document.getElementById('Algo-name'));
        const element2 = <div>Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.Merge sort is an efficient and stable sorting algorithm.</div>;
        ReactDOM.render(element2, document.getElementById('text'));
        const time = <div>
            <div>Worst-case time complexity:     O(n log n) </div>     
            <div>Average time complexity:	    O(n log n) </div>     
            <div>Best-case time complexity:	    O(n log n)  </div>    
            </div>;
        ReactDOM.render(time, document.getElementById('time'));
        const arr = this.state.array.slice();
        const animations = mergeSortAlgo(arr);
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
                      }, i * this.state.speed);
                }
                else{
                    setTimeout(() => {
                        barOneStyle.backgroundColor = '#b34cf4';
                        barTwoStyle.backgroundColor = '#b34cf4';
                      }, i * this.state.speed); 
                }
            }
            else{
                setTimeout(() => {
                    const [barOneindx, newHeight] = animations[i];
                    //const barOneStyle = arrayBars[barOneIdx].style;
                    const barOneStyle = arrayBars[barOneindx].style;
                    barOneStyle.height = `${newHeight}px`;
                    //barOneStyle.height = `${newHeight}px`;
                  }, i * this.state.speed);
            }
        }
    }
    selectionSortChoose(){
        const algo = 1;
        this.setState({algo});
    }
    mergeSortChoose(){
        const algo = 2;
        this.setState({algo});
    }
    insertionSortChoose(){
        const algo = 3;
        this.setState({algo});
    }
    bubbleSortChoose(){
        const algo = 4;
        this.setState({algo});
    }
    selectionSort(array){
        const copy = this.state.array.slice();
        const animations = selectionSortAlgo(copy);
        const element = <div>Selection Sort</div>;
        ReactDOM.render(element, document.getElementById('Algo-name'));
        const element2 = <div>Selection Sort is a simple sorting in-place comparison-based algorithm. The list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list. The smallest element is selected from the unsorted array and swapped with the leftmost element, and that element becomes a part of the sorted array. This process continues moving unsorted array boundary by one element to the right. </div>;
        ReactDOM.render(element2, document.getElementById('text'));
        const time = <div>
            <div>Worst-case time complexity:     O(n^2) </div>     
            <div>Average time complexity:	    O(n^2) </div>     
            <div>Best-case time complexity:	    O(n^2)  </div>    
            </div>;
        ReactDOM.render(time, document.getElementById('time'));
       
        for(let i = 0; i <animations.length;i++){
            
            const arrayBars = document.getElementsByClassName('array-bars');
            
            if(i%4===0){
                setTimeout(()=>{
                    const[barOne,barTwo] = animations[i];
                    const barOneStyle = arrayBars[barOne].style;
                    const barTwoStyle = arrayBars[barTwo].style;
                    barOneStyle.backgroundColor = '#ff8c00';
                    barTwoStyle.backgroundColor = '#ff8c00';
                },i*this.state.speed);

            }
            else if(i%4===1){
                setTimeout(()=>{
                    const[barOne,barTwo] = animations[i];
                    const barOneStyle = arrayBars[barOne].style;
                    const barTwoStyle = arrayBars[barTwo].style;
                    barOneStyle.backgroundColor = '#b34cf4';
                    barTwoStyle.backgroundColor = '#b34cf4';
                },i*this.state.speed);
            }
            else{
                const[barOne,height] = animations[i];
                    const barOneStyle = arrayBars[barOne].style;
                setTimeout(()=>{
                    barOneStyle.backgroundColor = '#ff8c00';
                    barOneStyle.height = `${height}px`;
                },i*this.state.speed);
                setTimeout(()=>{
                    barOneStyle.backgroundColor = '#b34cf4';
                },i*this.state.speed);
            }
        }
        

    }
    newArray(val){
        const array = [];
        for(let i = 0; i<val;i++){
            var randomNum = Math.floor((Math.random()*((600-10)+1))+10);
            array.push(randomNum);
        }
        this.setState({array});
        const speed = this.state.array.length <10 ?
        500 : this.state.array.length <20 ? 
        400 : this.state.array.length <30 ?
        300 : this.state.array.length <40 ?
        200 : this.state.array.length <40 ?
        150 : this.state.array.length <60 ?
        100 : this.state.array.length <80 ?
        50 : this.state.array.length <100 ?
        20 : 10;
      this.setState({speed});
      console.log(this.state.speed);
    }
    start(){
        if(this.state.algo===1){
            this.selectionSort();
        }
        if(this.state.algo===2){
            this.mergeSort();
        }
        if(this.state.algo===3){
            this.insertionSort();
        }
        if(this.state.algo===4){
            this.bubbleSort();
        }
    }
    initialSpeed(){
        const speed = 20;
        this.setState({speed});
    }
    abort(){
        window.location.reload(false);
    }

    render(){
        const{array} = this.state;
        const{algo} = this.state;
        
              const numWidth = Math.floor(window.innerWidth / (array.length * 3));
        const color =  "transparent";
        const width = `${numWidth}px`;
        const numMargin = array.length < 5 ?
            10 : array.length < 8 ?
                8 : array.length < 11 ?
                6 : array.length < 20 ?
                    4 : array.length < 50 ?
                    3.5 : array.length < 100 ?
                        3 : array.length < 130 ?
                        2.5 : 2;
  
    const margin = `${numMargin}px`;
        return (
            <div className="body" >
                <style>{'body { background-color: #374750; }'}</style>
            <div className = "app-name">Sorting Algorithms Visualizer created with <span class="heart"></span> and coffee by <a className = "linkedin" href  ="https://www.linkedin.com/in/dariabazueva/">Daria Bazueva</a></div>
            
            <div className = "menu"> 
            <input 
            className = "slide"
            type="range"
            id = "slide"
            min = "0"
            max = "50"
            onChange = {this.handleChange}
            ></input>
            <button className = "generate" onClick={() => this.newArray(100)}> Generate New Array </button>
                    <button className = "selectionSort" onClick = {()=>this.selectionSortChoose()}>Selection Sort</button>
                    <button className="mergeSort" onClick={() => this.mergeSortChoose()}> Merge Sort</button>
                    <button className = "bubbleSort" onClick = {()=>this.bubbleSortChoose()}>Bubble Sort</button>
                    <button className = "insertionSort" onClick = {()=>this.insertionSortChoose()}>Insertion Sort</button>
                    <button className = "start" onClick={() => this.start()}> Sort </button>
                    <button className = "abort" onClick={()=>this.abort()}>Abort</button>
                </div> 
            <div className="graph">
            {array.map((value,idx)=>(
                 <div className = "array-bars"
                 key={idx}
                    style={{height: `${value}px`,width:width,marginLeft:margin, marginRight:margin, color:color}}>
                  {value}      
                </div>
            ))}
            </div>
            <hr className="first-line" /> 
            <div className = "info">
            <div id = "Algo-name" className = "Algo-name">Select Algorithm</div>
            <div id = "text" className = "text" > I wanted to learn React as well as revise classic sorting algorithms for my interview prep. This app turned out to be the great way to achieve both objectives at once. It is a great tool to visualize the step-by-step process of performing sorting algorithms on unsorted list of values. You can generate new array and then perform any of sorting algorithms on it. </div> 
           
            <div id = "complexity" className = "complexity" >Time Complexity</div>
            <div id = "time" className = "time" >Worst-case time complexity:      </div>     
            <div>Average time complexity:	     </div>     
            <div>Best-case time complexity:	      </div>
            </div>
            </div>
        );
    }

}

export default SortingWiz;