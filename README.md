### Here are the steps I have taken to solve this assignment-

 **1. components-** Used two components
 * **Users-**  It shows the API result in a list of items. I am using an array.map() method for iterating every item in the result array. I am showing the result using a CSS grid.
 * **Error-** It displays the error message in case of error. 
 
 **2. App.JS -** I have used the `fetch()` API of javascript for fetching the data. `fetch()` returns a promise hence I have used `async`, and `await` for capturing the data. I have used conditionals for dynamically showing the content based on API response. Using the `useState` hook for maintaining the sate of the app. Here I am managing three states -
 **1.** for setting the users 
 **2.** a loading state for loaders 
 **3.** Error state for error handling.
 
I have used Tailwind CSS mostly but also I have used custom CSS modules for Loaders. It took 2 days for me to make this (around 7-8 hours) work.

## Live Link-