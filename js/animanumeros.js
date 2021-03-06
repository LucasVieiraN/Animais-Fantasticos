export default function initAnimaNumeros() {
  const numeros = document.querySelectorAll('[data-numero]')

  numeros.forEach(numero => {
    const total = +numero.innerText
    const incremento = Math.floor(total / 50)
    let start = 0
    const timer = setInterval(() => {
      start +=  incremento
      numero.innerText = start
      if(start > total) {
        numero.innerText = total
        clearInterval(timer)
      }
    }, 50 * Math.random())
  })
  
  let observer
  function handleMutation(mutation) {
    if(mutation[0].target.classList.contains('ativo')){
      observer.disconnect()
      initAnimaNumeros()
    }
  }
  observer = new MutationObserver(handleMutation)
  
  const observerTarget = document.querySelector('.numeros');
  observer.observe(observerTarget, {attributes: true});
}