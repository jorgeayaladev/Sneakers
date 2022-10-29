'use strict'
const ul = document.querySelector('ul')

const data = [
  'APROVECHA EL BLACK FRIDAY! 40% DE DESCUENTO EN TODA LA TIENDA POR CIERRE DE TEMPORADA.',
  'ENVÍOS GRATUITOS PARA PEDIDOS SUPERIORES A S/.70.00. 7 mes devoluciones gratuitas.',
  'OFERTAS EN DEPORTIVAS A 15% DSCTO ',
  'ENVÍOS GRATUITOS PARA PEDIDOS SUPERIORES A S/.30.00. 3 mes devoluciones gratuitas.',
  'ENVÍOS GRATUITOS PARA PEDIDOS SUPERIORES A S/.10.00. 1 mes devoluciones gratuitas.',
]

let count = 0;

function frames() {

  const animation = ul.animate([
    {transform: "translateX(100vw)"},
    {transform: "translateX(calc(-110%))"},    
  ],{
    easing: "linear",
    iterations: Infinity,
    duration: 35000
  });

  return animation.finished; 
}

function deplace() { 
  
  // document.getElementById("p1")?.remove();
  const li = document.createElement('li')
  li.textContent = data[count]
  li.id = 'p1'
  ul.appendChild(li)
          
  frames().
  then( (res) => {
    console.log(res);    
  })
  count++
}
   
for (const i of data) {
  deplace()
}



