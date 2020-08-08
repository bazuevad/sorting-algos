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

export function bubbleSortAlgo(array){
    const animations = [];
    for(let i = 0; i < array.length-1;i++){
        for(let j = 0; j<array.length-1-i;j++){
            animations.push([j,j+1]);
            if(array[j]>array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                animations.push([j,array[j]]);
                animations.push([j+1,array[j+1]]);
            }
            else{
                animations.push([j,array[j]]);
                animations.push([j+1,array[j+1]]);
            }
        }
    }
    return animations;
}