This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Sorting Visualizer

This is a web app built using React and is used to enhance the proceess of studying sortng algorithms for students by visualizing sorting algorithms step-by-step on unsorted arrays. Includes sorting algorithms such as merge sort, bubble sort, insertion sort and etc. Speed of algorithm's visualization and size of unsorted arrays can be adjusted which provides different options for studying purposes. 

App is deployed and can be accessed here: https://bazuevad.github.io/sorting-algos/.

![alt text](https://user-images.githubusercontent.com/62586933/92315441-7dfae300-efb3-11ea-8af4-a494167ff8ea.png)

## Purpose 

I wanted to learn React as well as revise classic sorting algorithms for my interview prep. This app turned out to be the great way to achieve both objectives at once. It is a great tool to visualize the step-by-step process of performing sorting algorithms on unsorted list of values. You can generate new array and then perform any of sorting algorithms on it.

## Installation 

If you wish to run this app locally, clone this repo and install the dependencies.

`$ git clone https://github.com/bazuevad/sorting-algos.git`

`$ cd sort-visualizer`

`$ npm install`

## App Conventions

The src folder contains following subdirectories:

`Algorithms.js` file contains all sorting algorithms implementations and all functions that sort unsorted arrays using different algorithms

`barsStyle.css`  contains all CSS custom properties declarations for the entirety of the app. This file determines the overall look and feel of the application.

`SortingWiz.jsx` contains a class called SortingWiz that represents the whole infrastructure of the visualizer. It contains animations for each algorithms, generator of a new random array, graph builder and all other components that user sees when loading the app. 




