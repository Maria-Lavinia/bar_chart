"use strict";

// // window.addEventListener("load", init);
//  let iteration;
//  let bar;
// const model = [8, 12, 32, 4, 13, 24, 23, 22, 1, 0, 30, 7, 3, 6, 19, 24, 29, 14, 16, 3, 1, 9, 8, 30, 12, 0, 30, 7, 3, 6, 9, 19, 24, 29, 14, 4, 18, 1];




// model.forEach((e) => {
//     bar = document.createElement("div");
//     iteration = e;
//     document.querySelector(".rectangle").appendChild(bar);
//     addClass();
//   });
  
//   function addClass() {
//     bar.setAttribute("class", "bar");
//     bar.style.height = `${iteration}vw`;
//   }
// // function init() {
// //      bar = document.querySelector(".rectangle");
// //     // let bar = 38;
// //   iteration = 0;
// //     loop();
// // }
// // function loop(){
// //     iteration++;
// //     if (iteration<bar){
// //         setTimeout(loop, 500);
// //     }
// // }


document.addEventListener("DOMContentLoaded", init);

const model = [];

function init() {
  //Adding fourty different numbers to the array chart
  for (let number = 0; number < 40; number++) {
    model[number] = getNumberOfCustomers();
  }
  loop();
  displayData();
}

function loop() {
  //The loop takes the 40 different numbers from the array to each bar
  for (let number = 0; number < 40; number++) {
    document.getElementById("bars").getElementsByClassName("rectangle")[number].style.height = model[number] + "px";
  }
}

function getNumberOfCustomers() {
  //Makes the random numbers
  const randomNumber = Math.floor(Math.random() * 32);
  console.log(randomNumber);
  return randomNumber;
}

function displayData() {
  //calling two function to timeout
  modifyModel();
  loop();
  setTimeout(displayData, 500);
}

function modifyModel() {
  //adds the new random number by .push
  model.push(getNumberOfCustomers());
  //Removes the first made random number
  model.shift();
}