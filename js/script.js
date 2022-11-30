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
  // input
  const extraLarge = document.getElementById("extra-large").checked
  const large = document.getElementById("large").checked
  const medium = document.getElementById("medium").checked
  const oneTopping = document.getElementById("1-topping").checked
  const twoTopping = document.getElementById("2-topping").checked
  const threeTopping = document.getElementById("3-topping").checked

  if (extraLarge == true) {
    console.log("size3")
    const size = 10
  } else if (large == true) {
    const size = 8
    console.log("size2")
  } else if (medium == true) {
    const size = 6
    console.log("size1")
  } else {
    document.getElementById("answer").innerHTML =
    "Please pick a size of the pizza"
  }
}
