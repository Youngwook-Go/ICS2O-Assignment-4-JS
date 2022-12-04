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

function update() {
  console.log("update")
  const HST = 0.13

  // size
  const sizeXL = document.getElementById("extra-large").checked
  const sizeL = document.getElementById("large").checked
  const sizeM = document.getElementById("medium").checked
  console.log("sizeXL : " + sizeXL)
  console.log("sizeL : " + sizeL)
  console.log("sizeM : " + sizeM)

  let size
  if (sizeXL == true) {
    size = 12
  } else if (sizeL == true) {
    size = 10
  } else if (sizeM == true) {
    size = 8
  } else {
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
  const check = size * topping * beverage
  const price = size + topping + beverage
  const answer = price + price * HST
  console.log("The price is : " + price)
  console.log("The total price is : " + answer)
  if (isNaN(answer) || check == 0) {
    document.getElementById("answer").innerHTML = "Please fill the blank"
  } else {
    document.getElementById("answer").innerHTML =
      "The total price is : " + answer + " $"
  }

  console.log(
    "////////////////////////////////////////////////////////////////"
  )
}
