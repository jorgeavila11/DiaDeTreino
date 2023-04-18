import React from 'react'

const TestePegarvalor = () => {
  
function handleGetValue(event){
    event.preventDefault()
    const valor = event.target.value
    console.log(valor)
}


  
  return (
    <div>
        <button id='meuBotao' onClick={handleGetValue} value="2" >teste</button>
    </div>
  )
}

export default TestePegarvalor