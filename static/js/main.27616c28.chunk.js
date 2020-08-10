(this.webpackJsonpsorting_algos=this.webpackJsonpsorting_algos||[]).push([[0],[,,,,function(e,t,a){},,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(1),l=a.n(o),i=(a(14),a(15),a(16),a(2)),s=a(5),c=a(6),m=a(8),u=a(7);a(4);function d(e){var t=[];if(e.length<=1)return e;var a=e.slice();return function e(t,a,n,r,o){if(a===n)return;var l=Math.floor((a+n)/2);e(r,a,l,t,o),e(r,l+1,n,t,o),function(e,t,a,n,r,o){var l=t,i=a+1,s=t;for(;l<=a&&i<=n;)o.push([l,i]),o.push([l,i]),r[l]<r[i]?(o.push([s,r[l]]),e[s]=r[l],s++,l++):(o.push([s,r[i]]),e[s]=r[i],s++,i++);for(;l<=a;)o.push([l,l]),o.push([l,l]),o.push([s,r[l]]),e[s]=r[l],s++,l++;for(;i<=n;)o.push([i,i]),o.push([i,i]),o.push([s,r[i]]),e[s]=r[i],s++,i++}(t,a,l,n,r,o)}(e,0,e.length-1,a,t),t}var h=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={array:[],text:"",name:""},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.newArray(),this.initialText(),this.initialName()}},{key:"insertionSort",value:function(e){var t=r.a.createElement("div",null,"Insertion Sort");l.a.render(t,document.getElementById("Algo-name"));var a=r.a.createElement("div",null,"Insertion Sort is a simple sorting algorithm that builds the final sorted list by transferring one element at a time.");l.a.render(a,document.getElementById("text"));var n=function(e){for(var t=[],a=1;a<e.length;a++){t.push([a,a,0]),t.push([a,a,-1]);for(var n=e[a],r=a-1;r>=0&&e[r]>n;)t.push([r,r,0]),t.push([r,r,-1]),t.push([r+1,e[r],-2]),e[r+1]=e[r],r--;t.push([r+1,n,-2]),e[r+1]=n}return t}(this.state.array),o=r.a.createElement("div",null,r.a.createElement("div",null,"Worst-case time complexity:     O(n^2) "),r.a.createElement("div",null,"Average time complexity:     O(n^2) "),r.a.createElement("div",null,"Best-case time complexity:     O(n)  "));l.a.render(o,document.getElementById("time"));for(var s=function(e){var t=document.getElementsByClassName("array-bars"),a=Object(i.a)(n[e],3),r=a[0],o=a[1],l=a[2];0===l?setTimeout((function(){t[r].style.backgroundColor="#ff8c00"}),100*e):-1===l?setTimeout((function(){t[r].style.backgroundColor="#b34cf4"}),100*e):setTimeout((function(){var e=t[r].style;e.height="".concat(o,"px"),e.backgroundColor="#b34cf4"}),100*e)},c=0;c<n.length;c++)s(c)}},{key:"bubbleSort",value:function(e){var t=r.a.createElement("div",null,"Bubble Sort");l.a.render(t,document.getElementById("Algo-name"));var a=r.a.createElement("div",null,"Bubble Sort is a simple sorting algorithm that repeatedly goes through the list, compares two adjacent elements and swaps them if they are in the wrong order.This process repeats until the list is sorted.  The algorithm is simple, however it is too slow and very inefficient for most problems.");l.a.render(a,document.getElementById("text"));var n=function(e){for(var t=[],a=0;a<e.length-1;a++)for(var n=0;n<e.length-1-a;n++)if(t.push([n,n+1]),t.push([n,n+1]),e[n]>e[n+1]){var r=e[n];e[n]=e[n+1],e[n+1]=r,t.push([n,e[n]]),t.push([n+1,e[n+1]])}else t.push([n,e[n]]),t.push([n+1,e[n+1]]);return t}(this.state.array),o=r.a.createElement("div",null,r.a.createElement("div",null,"Worst-case time complexity:     O(n^2) "),r.a.createElement("div",null,"Average time complexity:     O(n^2) "),r.a.createElement("div",null,"Best-case time complexity:     O(n)  "));l.a.render(o,document.getElementById("time"));for(var s=function(e){var t=document.getElementsByClassName("array-bars");e%4===0?setTimeout((function(){var a=Object(i.a)(n[e],2),r=a[0],o=a[1],l=t[r].style,s=t[o].style;l.backgroundColor="#ff8c00",s.backgroundColor="#ff8c00"}),100*e):e%4===1?setTimeout((function(){var a=Object(i.a)(n[e],2),r=a[0],o=a[1],l=t[r].style,s=t[o].style;l.backgroundColor="#b34cf4",s.backgroundColor="#b34cf4"}),100*e):setTimeout((function(){var a=Object(i.a)(n[e],2),r=a[0],o=a[1],l=t[r].style;l.height="".concat(o,"px"),l.backgroundColor="#b34cf4"}),100*e)},c=0;c<n.length;c++)s(c)}},{key:"mergeSort",value:function(e){var t=r.a.createElement("div",null,"Merge Sort");l.a.render(t,document.getElementById("Algo-name"));var a=r.a.createElement("div",null,"Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.Merge sort is an efficient and stable sorting algorithm.");l.a.render(a,document.getElementById("text"));var n=r.a.createElement("div",null,r.a.createElement("div",null,"Worst-case time complexity:     O(n log n) "),r.a.createElement("div",null,"Average time complexity:     O(n log n) "),r.a.createElement("div",null,"Best-case time complexity:     O(n log n)  "));l.a.render(n,document.getElementById("time"));for(var o=d(this.state.array),s=function(e){var t=document.getElementsByClassName("array-bars");if(e%3!==2){var a=Object(i.a)(o[e],2),n=a[0],r=a[1],l=t[n].style,s=t[r].style;e%3===0?setTimeout((function(){l.backgroundColor="#ff8c00",s.backgroundColor="#ff8c00"}),100*e):setTimeout((function(){l.backgroundColor="#b34cf4",s.backgroundColor="#b34cf4"}),100*e)}else setTimeout((function(){var a=Object(i.a)(o[e],2),n=a[0],r=a[1];t[n].style.height="".concat(r,"px")}),100*e)},c=0;c<o.length;c++)s(c)}},{key:"selectionSort",value:function(e){var t=function(e){for(var t=[],a=0;a<e.length;a++){for(var n=a,r=a+1;r<e.length;r++)e[r]<e[n]&&(n=r);t.push([a,n]),t.push([a,n]),t.push([a,e[n]]),t.push([n,e[a]]);var o=e[n];e[n]=e[a],e[a]=o}return t}(this.state.array),a=r.a.createElement("div",null,"Selection Sort");l.a.render(a,document.getElementById("Algo-name"));var n=r.a.createElement("div",null,"Selection Sort is a simple sorting in-place comparison-based algorithm. The list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list. The smallest element is selected from the unsorted array and swapped with the leftmost element, and that element becomes a part of the sorted array. This process continues moving unsorted array boundary by one element to the right. ");l.a.render(n,document.getElementById("text"));var o=r.a.createElement("div",null,r.a.createElement("div",null,"Worst-case time complexity:     O(n^2) "),r.a.createElement("div",null,"Average time complexity:     O(n^2) "),r.a.createElement("div",null,"Best-case time complexity:     O(n^2)  "));l.a.render(o,document.getElementById("time"));for(var s=function(e){var a=document.getElementsByClassName("array-bars");if(e%4===0)setTimeout((function(){var n=Object(i.a)(t[e],2),r=n[0],o=n[1],l=a[r].style,s=a[o].style;l.backgroundColor="#ff8c00",s.backgroundColor="#ff8c00"}),100*e);else if(e%4===1)setTimeout((function(){var n=Object(i.a)(t[e],2),r=n[0],o=n[1],l=a[r].style,s=a[o].style;l.backgroundColor="#b34cf4",s.backgroundColor="#b34cf4"}),100*e);else{var n=Object(i.a)(t[e],2),r=n[0],o=n[1],l=a[r].style;setTimeout((function(){l.backgroundColor="#ff8c00",l.height="".concat(o,"px")}),100*e),setTimeout((function(){l.backgroundColor="#b34cf4"}),100*e)}},c=0;c<t.length;c++)s(c)}},{key:"newArray",value:function(){for(var e=[],t=0;t<100;t++){var a=Math.floor(591*Math.random()+10);e.push(a)}this.setState({array:e})}},{key:"initialText",value:function(){this.setState({text:"Hello world!"})}},{key:"initialName",value:function(){this.setState({name:"This project rocks!"})}},{key:"render",value:function(){var e=this,t=this.state.array;this.state.text,this.state.name;return r.a.createElement("div",{className:"graph"},r.a.createElement("div",{className:"app-name"},"Sorting Algorithms Visualizer created with ",r.a.createElement("span",{class:"heart"})," and coffee by ",r.a.createElement("a",{className:"linkedin",href:"https://www.linkedin.com/in/dariabazueva/"},"Daria Bazueva")),t.map((function(e,t){return r.a.createElement("div",{className:"array-bars",key:t,style:{height:"".concat(e,"px")}})})),r.a.createElement("hr",{className:"first-line"}),r.a.createElement("div",{className:"menu"},r.a.createElement("button",{className:"selectionSort",onClick:function(){return e.selectionSort()}},"Selection Sort"),r.a.createElement("button",{className:"mergeSort",onClick:function(){return e.mergeSort()}}," Merge Sort"),r.a.createElement("button",{className:"bubbleSort",onClick:function(){return e.bubbleSort()}},"Bubble Sort"),r.a.createElement("button",{className:"insertionSort",onClick:function(){return e.insertionSort()}},"Insertion Sort"),r.a.createElement("button",{className:"generate",onClick:function(){return e.newArray()}}," Generate New Array ")),r.a.createElement("div",{id:"Algo-name",className:"Algo-name"},"Select Algorithm"),r.a.createElement("div",{id:"text",className:"text"}," I wanted to learn React as well as revise classic sorting algorithms for my interview prep. This app turned out to be the great way to achieve both objectives at once. It is a great tool to visualize the step-by-step process of performing sorting algorithms on unsorted list of values. You can generate new array and then perform any of sorting algorithms on it. "),r.a.createElement("hr",{className:"vert-line",width:"1",size:"300"}),r.a.createElement("div",{id:"complexity",className:"complexity"},"Time Complexity"),r.a.createElement("div",{id:"time",className:"time"},r.a.createElement("div",null,"Worst-case time complexity:      "),r.a.createElement("div",null,"Average time complexity:      "),r.a.createElement("div",null,"Best-case time complexity:       ")))}}]),a}(r.a.Component);var f=function(){return r.a.createElement(h,{className:"Visualizer"})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.27616c28.chunk.js.map