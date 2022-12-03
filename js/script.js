// Copyright (c) 2022 Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: OCT 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-4-JS/sw.js", {
    scope: "/ICS2O-Assignment-4-JS/",
  })
}

// function description

function update() {
  console.log("update")
  const HST = 13
  
  // size
  const sizeXL = document.getElementById("extra-large").checked
  const sizeL = document.getElementById("large").checked
  const sizeM = document.getElementById("medium").checked
  console.log("sizeXL : "+sizeXL)
  console.log("sizeL : "+sizeL)
  console.log("sizeM : "+sizeM)

  let size
  if (sizeXL == true) 
  {
    size = 10
  } 
  else if (sizeL == true) 
  {
    size = 8
  } 
  else if (sizeM == true) 
  {
    size = 6
  } 
  else 
  {
    size = 0
  }
  console.log(size)
  // topping
  const topping = parseInt(document.getElementById("topping-options").value)
  console.log("topping number : " + topping)
  // drinks
  const beverage = parseInt(document.getElementById("beverage-options").value)
  console.log("Beverage price : " + beverage)

  // output
  const answer = size + topping + beverage
  console.log("The total price is : " + answer)
  if (isNaN(answer)) {
     document.getElementById("answer").innerHTML = "Please fill the blank"
  } else {
    document.getElementById("answer").innerHTML = "The total price is : " + answer + "."
  }
  
  console.log("////////////////////////////////////////////////////////////////")
}
