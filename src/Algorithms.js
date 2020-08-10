import React from 'react';
import SortingWiz from './SortingWiz.jsx';

export function mergeSortAlgo(array){
    const animations = [];
    if(array.length<=1){
        return array;
    }
    const auxArray = array.slice();
    helperMergeSort(array,0,array.length-1,auxArray,animations);
    
    return animations;
}

function helperMergeSort(array, start, end, auxArray,animations){
    if(start===end){
        return;
    }
    const mid = Math.floor((start+end)/2);
    helperMergeSort(auxArray,start,mid,array,animations);
    helperMergeSort(auxArray,mid+1,end, array,animations);
    merge(array,start,mid,end,auxArray,animations);
}

function merge(array,start,mid,end,auxArray,animations){
    let i = start;
    let j = mid+1;
    let k = end;
    let l = start;
    while(i<=mid&&j<=end){
        animations.push([i,j]);
        animations.push([i,j]);
        if(auxArray[i]<auxArray[j]){
            animations.push([l,auxArray[i]]);
            array[l] = auxArray[i];
            l++;
            i++;
        }
        else{
            animations.push([l,auxArray[j]]);
            array[l] = auxArray[j];
            l++;
            j++;
        }
    }
    while(i<=mid){
        animations.push([i,i]);
        animations.push([i,i]);
        animations.push([l,auxArray[i]]);
        array[l]=auxArray[i];
        l++;
        i++;
    }
    while(j<=end){
        animations.push([j,j]);
        animations.push([j,j]);
        animations.push([l,auxArray[j]]);
        array[l]=auxArray[j];
        l++;
        j++;
    }
}

export function bubbleSortAlgo(arr){
    const animations = [];
    for(let i = 0; i < arr.length-1;i++){
        for(let j = 0; j<arr.length-1-i;j++){
            animations.push([j,j+1]);
            animations.push([j,j+1]);
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                animations.push([j,arr[j]]);
                animations.push([j+1,arr[j+1]]);
            }
            else{
                animations.push([j,arr[j]]);
                animations.push([j+1,arr[j+1]]);
            }
        }
    }
    return animations;
}

export function insertionSortAlgo(array){
    const animations = [];
    for(let i =1; i< array.length; i++){
        animations.push([i,i,0]);
        animations.push([i,i,-1]);
        let key = array[i];
        let j = i-1;
        
        //we are shifting all values that are larger thn
        //our current key up 
        while(j>=0&&array[j]>key){
            animations.push([j,j,0]);
            animations.push([j,j,-1]);
            animations.push([j+1,array[j],-2]);
            array[j+1] = array[j];
            j--;
        }
        //placing key on the right spot
        animations.push([j+1,key,-2]);
        array[j+1] = key;
        
    }
    return animations;
}


export function selectionSortAlgo(array){
    const animations = [];
    for(let i = 0; i< array.length; i++){
        let min = i;
        for(let j = i+1; j<array.length;j++){
            if(array[j]<array[min]){
                min = j;
            }
        }
        animations.push([i,min]);
        animations.push([i,min]);
        animations.push([i,array[min]]);
        animations.push([min,array[i]]);
        let temp = array[min];
        array[min] = array[i];
        array[i] = temp;
    }
    return animations;
}