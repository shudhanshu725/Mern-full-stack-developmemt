// const pHtml = document.getElementsByClassName('child');

// const pNode = document.querySelectorAll('.child');

// pNode[4].remove();

// console.log(pHtml);
// console.log(pNode);


const h1 = document.createElement('h1');
h1.textContent = 'Namaste Javascript';

// const body = document.querySelector('body');
// body.appendChild(h1);

const root = document.getElementById('root');
root.appendChild(h1);

// root.append(p1,p2,p3) use for multiple elements