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
        this.state = {array:[] , text: "", name: ""};

    }

    componentDidMount(){
        this.newArray();
        this.initialText();
        this.initialName();
    }

    insertionSort(array){
        const element = <div>Insertion Sort</div>;
        ReactDOM.render(element, document.getElementById('Algo-name'));
        const element2 = <div>Insertion Sort is a simple sorting algorithm that builds the final sorted list by transferring one element at a time.</div>;
        ReactDOM.render(element2, document.getElementById('text'));
        const animations = insertionSortAlgo(this.state.array);
        const time = <div>
            <div>Worst-case time complexity:     O(n^2) </div>     
            <div>Average time complexity:	    O(n^2) </div>     
            <div>Best-case time complexity:	    O(n)  </div>    
            </div>;
        ReactDOM.render(time, document.getElementById('time'));
        for(let i = 0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bars');    
            const[barOne,barTwo, indx] = animations[i];
            //if animation is showing value before it's being replaced
            if(indx===0){
                setTimeout(()=>{
                    const barOneStyle = arrayBars[barOne].style;
                    barOneStyle.backgroundColor = '#ff8c00';
                },i*100);
            }
            else if(indx===-1){
                setTimeout(()=>{
                    const barOneStyle = arrayBars[barOne].style;
                    barOneStyle.backgroundColor = '#b34cf4';
                },i*100);
            }
            else{
                setTimeout(()=>{
                    const barOneStyle = arrayBars[barOne].style;
                    barOneStyle.height = `${barTwo}px`;
                    barOneStyle.backgroundColor = '#b34cf4';
                },i*100);
                

            }
        }
    }
   
    bubbleSort(array){
        const element = <div>Bubble Sort</div>;
        ReactDOM.render(element, document.getElementById('Algo-name'));
        const element2 = <div>Bubble Sort is a simple sorting algorithm that repeatedly goes through the list, compares two adjacent elements and swaps them if they are in the wrong order.This process repeats until the list is sorted.  The algorithm is simple, however it is too slow and very inefficient for most problems.</div>;
        ReactDOM.render(element2, document.getElementById('text'));
        const animations = bubbleSortAlgo(this.state.array);
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
                },i*100);
            }
            else if(i%4===1){
                
                setTimeout(()=>{
                    const[barOne, barTwo] = animations[i];
                    const barOneStyle = arrayBars[barOne].style;
                    const barTwoStyle = arrayBars[barTwo].style;
                    barOneStyle.backgroundColor = '#b34cf4';
                    barTwoStyle.backgroundColor = '#b34cf4';
                    
                },i*100);
            }
            else{
                
                setTimeout(()=>{
                    const[barOne, height] = animations[i];
                    const barOneStyle = arrayBars[barOne].style;
                    barOneStyle.height = `${height}px`;
                    barOneStyle.backgroundColor = '#b34cf4';
                },i*100);
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
                      }, i * 100);
                }
                else{
                    setTimeout(() => {
                        barOneStyle.backgroundColor = '#b34cf4';
                        barTwoStyle.backgroundColor = '#b34cf4';
                      }, i * 100); 
                }
            }
            else{
                setTimeout(() => {
                    const [barOneindx, newHeight] = animations[i];
                    //const barOneStyle = arrayBars[barOneIdx].style;
                    const barOneStyle = arrayBars[barOneindx].style;
                    barOneStyle.height = `${newHeight}px`;
                    //barOneStyle.height = `${newHeight}px`;
                  }, i * 100);
            }
        }
    }
    selectionSort(array){
        const animations = selectionSortAlgo(this.state.array);
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
                },i*100);

            }
            else if(i%4===1){
                setTimeout(()=>{
                    const[barOne,barTwo] = animations[i];
                    const barOneStyle = arrayBars[barOne].style;
                    const barTwoStyle = arrayBars[barTwo].style;
                    barOneStyle.backgroundColor = '#b34cf4';
                    barTwoStyle.backgroundColor = '#b34cf4';
                },i*100);
            }
            else{
                const[barOne,height] = animations[i];
                    const barOneStyle = arrayBars[barOne].style;
                setTimeout(()=>{
                    barOneStyle.backgroundColor = '#ff8c00';
                    barOneStyle.height = `${height}px`;
                },i*100);
                setTimeout(()=>{
                    barOneStyle.backgroundColor = '#b34cf4';
                },i*100);
            }
        }
        

    }
    newArray(){
        const array = [];
        for(let i = 0; i<100;i++){
            var randomNum = Math.floor((Math.random()*((600-10)+1))+10);
            array.push(randomNum);
        }
        this.setState({array});
    }
    initialText(){
        const text = "Hello world!";
        this.setState({text});
    }

    initialName(){
        const name = "This project rocks!";
        this.setState({name});
    }
    render(){
        const{array} = this.state;
        const{text} = this.state;
        const{name} = this.state;
        return (
            <div className="graph">
              <div className = "app-name">Sorting Algorithms Visualizer created with <span class="heart"></span> and coffee by <a className = "linkedin" href  ="https://www.linkedin.com/in/dariabazueva/">Daria Bazueva</a></div>  
            {array.map((value,idx)=>(
                 <div className = "array-bars"
                 key={idx}
                    style={{height: `${value}px`}}>
                </div>
            ))}
            <hr className="first-line" />
                <div className = "menu"> 
                    <button className = "selectionSort" onClick = {()=>this.selectionSort()}>Selection Sort</button>
                    <button className="mergeSort" onClick={() => this.mergeSort()}> Merge Sort</button>
                    <button className = "bubbleSort" onClick = {()=>this.bubbleSort()}>Bubble Sort</button>
                    <button className = "insertionSort" onClick = {()=>this.insertionSort()}>Insertion Sort</button>
                    <button className = "generate" onClick={() => this.newArray()}> Generate New Array </button>
                </div>     
               
            <div id = "Algo-name" className = "Algo-name">Select Algorithm</div>
            <div id = "text" className = "text" > I wanted to learn React as well as revise classic sorting algorithms for my interview prep. This app turned out to be the great way to achieve both objectives at once. It is a great tool to visualize the step-by-step process of performing sorting algorithms on unsorted list of values. You can generate new array and then perform any of sorting algorithms on it. </div> 
            <hr className="vert-line"  width="1" size="300"/>
            <div id = "complexity" className = "complexity" >Time Complexity</div>
            <div id = "time" className = "time" ><div>Worst-case time complexity:      </div>     
            <div>Average time complexity:	     </div>     
            <div>Best-case time complexity:	      </div></div>

            </div>
            
        );
    }

}

export default SortingWiz;