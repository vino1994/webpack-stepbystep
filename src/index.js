import _ from "lodash";
import printMe from "./printMe";
import './css/styles.css'
import './css/styles.less'

function component() {
  let element = document.createElement('div')
  element.className = 'div1'
  element.innerHTML = _.join(['hello ', 'webpack'], '')
  let btn = document.createElement('button')
  btn.innerHTML = 'click me'
  btn.onclick = printMe
  element.appendChild(btn)
  let img = new Image()
  img.src = require('./imgs/pop1.png').default
  element.appendChild(img)

  return element
}

// 123123
// document.body.appendChild(component())

let ele = component()
document.body.appendChild(ele)

if (module.hot) {
  module.hot.accept('./printMe.js', _ => {
    console.log('Accepting the updated printMe module!')
    // printMe()
    document.body.removeChild('ele')
    ele = component()
    document.body.appendChild(ele)
  })
}