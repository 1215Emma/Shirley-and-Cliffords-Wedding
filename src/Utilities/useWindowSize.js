import { useState, useEffect, useLayoutEffect } from 'react'

let windowDimensions = {height: window.innerHeight, width: window.innerWidth}

export const debounce = (fn, delay) => {
  let timer;
  return function () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, delay)
  }
}

let windowSize = (height, width) => {
  windowDimensions.height = height;
  windowDimensions.width = width;
}

windowSize = debounce(windowSize, 1000)

window.addEventListener('resize', () => windowSize(window.innerHeight, window.innerWidth))