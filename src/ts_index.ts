import './css/styles.scss'

function component() {
  let element = document.createElement('div');
  element.className = 'div2'
  element.innerHTML = 'hello ts-loader'

  return element;
}

document.body.appendChild(component());
