import React, { useState, useRef, useEffect  } from 'react'
import ReactDOM from 'react-dom';

import "./teste.css"

const Teste = () => {

  // dia da semana

  const [diaSemana, setDiaSemana] = useState(" ")





// 1 semana
 const elementoRefSem1Seg = useRef(null)
 const elementoRefSem1Ter = useRef(null)
 const elementoRefSem1Qua = useRef(null)
 const elementoRefSem1Qui = useRef(null)
 const elementoRefSem1Sex = useRef(null)

// 2 semana
 const elementoRefSem2Seg = useRef(null)
 const elementoRefSem2Ter = useRef(null)
 const elementoRefSem2Qua = useRef(null)
 const elementoRefSem2Qui = useRef(null)
 const elementoRefSem2Sex = useRef(null)

 // 3 semana
 const elementoRefSem3Seg = useRef(null)
 const elementoRefSem3Ter = useRef(null)
 const elementoRefSem3Qua = useRef(null)
 const elementoRefSem3Qui = useRef(null)
 const elementoRefSem3Sex = useRef(null)

// 4 semana
const elementoRefSem4Seg = useRef(null)
const elementoRefSem4Ter = useRef(null)
const elementoRefSem4Qua = useRef(null)
const elementoRefSem4Qui = useRef(null)
const elementoRefSem4Sex = useRef(null)
// 5 semana


function useSetDiaSemana(dia, sem){ 
  console.log("fora: " + dia)
    useEffect(() =>{
      console.log("dentro: " + dia)
      if(dia === "seg" && sem === 1){
        const segunda = ReactDOM.findDOMNode(elementoRefSem1Seg.current)           
        segunda.classList.add('diaSemana');
        console.log(segunda)
      }else if(dia === "ter" && sem === 1) {
        const terca = ReactDOM.findDOMNode(elementoRefSem1Ter.current)
        terca.classList.add('diaSemana');
      }else if(dia === "qua" && sem === 1) {
        const quarta = ReactDOM.findDOMNode(elementoRefSem1Qua.current)
        quarta.classList.add('diaSemana');
      }else if(dia === "qui" && sem === 1) {
        const quinta = ReactDOM.findDOMNode(elementoRefSem1Qui.current)
        quinta.classList.add('diaSemana');
      }else if(dia === "sex" && sem === 1) {
        const sexta = ReactDOM.findDOMNode(elementoRefSem1Sex.current)
        sexta.classList.add('diaSemana');
      }else if(dia === "seg" && sem === 2) {
        const segunda2sem = ReactDOM.findDOMNode(elementoRefSem2Seg.current)
        segunda2sem.classList.add('diaSemana');
      }else if(dia === "ter" && sem === 2) {
        const terca2sem = ReactDOM.findDOMNode(elementoRefSem2Ter.current)
        terca2sem.classList.add('diaSemana');
      }else if(dia === "qua" && sem === 2) {
        const quarta2sem = ReactDOM.findDOMNode(elementoRefSem2Qua.current)
        quarta2sem.classList.add('diaSemana');
      }else if(dia === "qui" && sem === 2) {
        const quinta2sem = ReactDOM.findDOMNode(elementoRefSem2Qui.current)
        quinta2sem.classList.add('diaSemana');
      }else if(dia === "sex" && sem === 2) {
        const sexta2sem = ReactDOM.findDOMNode(elementoRefSem2Sex.current)
        sexta2sem.classList.add('diaSemana');
      }else if(dia === "seg" && sem === 3) {
        const segunda3sem = ReactDOM.findDOMNode(elementoRefSem3Seg.current)
        segunda3sem.classList.add('diaSemana');
      }else if(dia === "ter" && sem === 3) {
        const terca3sem = ReactDOM.findDOMNode(elementoRefSem3Ter.current)
        terca3sem.classList.add('diaSemana');
      }else if(dia === "qua" && sem === 3) {
        const quarta3sem = ReactDOM.findDOMNode(elementoRefSem3Qua.current)
        quarta3sem.classList.add('diaSemana');
      }else if(dia === "qui" && sem === 3) {
        const quinta3sem = ReactDOM.findDOMNode(elementoRefSem3Qui.current)
        quinta3sem.classList.add('diaSemana');
      }else if(dia === "sex" && sem === 3) {
        const sexta3sem = ReactDOM.findDOMNode(elementoRefSem3Sex.current)
        sexta3sem.classList.add('diaSemana');
      }else if(dia === "seg" && sem === 4) {
        const segunda4sem = ReactDOM.findDOMNode(elementoRefSem4Seg.current)
        segunda4sem.classList.add('diaSemana');
      }else if(dia === "ter" && sem === 4) {
        const terca4sem = ReactDOM.findDOMNode(elementoRefSem4Ter.current)
        terca4sem.classList.add('diaSemana');
      }else if(dia === "qua" && sem === 4) {
        const quarta4sem = ReactDOM.findDOMNode(elementoRefSem4Qua.current)
        quarta4sem.classList.add('diaSemana');
      }else if(dia === "qui" && sem === 4) {
        const quinta4sem = ReactDOM.findDOMNode(elementoRefSem4Qui.current)
        quinta4sem.classList.add('diaSemana');
      }else if(dia === "sex" && sem === 4) {
        const sexta4sem = ReactDOM.findDOMNode(elementoRefSem4Sex.current)
        sexta4sem.classList.add('diaSemana');
      }
    },[])
  
}


// useEffect(()=>{
//   const dias = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];
//   const diaIndex = new Date().getDay();

//   setDiaSemana(dias[diaIndex]);  
  
// },[])

function handleSetDiaSemana(){
  const dias = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];
  const diaIndex = new Date().getDay();
  const dia = dias[diaIndex];
  return dia   
  
}

function handleGetSemana(){
    const today = new Date();
    const dayOfMonth = today.getDate()
    const dayPerWeek = 7;
    const weekOfMonth = Math.ceil( dayOfMonth / dayPerWeek)
    return  weekOfMonth
}


useSetDiaSemana(handleSetDiaSemana(), handleGetSemana())


  const semanaA = {
    id: 1,
    letra: "A",
    exercicio: "Peito"
  }
  const semanaB = {
    id: 2,
    letra: "B",
    exercicio: "Costa"
  }
  const semanaC = {
    id: 3,
    letra: "C",
    exercicio: "Perna"
  }
  const semanaD = {
    id: 4,
    letra: "D",
    exercicio: "Ombro"
  }

 
  

  return (
    <div>
      <div className='container'>
        Lista de exercícios  
        <div className='box'>          
          <table class="table table-hover">          
            <thead>
              <tr>                
                <th scope="col">Semana</th>
                <th scope="col">Seg</th>
                <th scope="col">Ter</th>
                <th scope="col">Qua</th>
                <th scope="col">Qui</th>
                <th scope="col">Sex</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td id='sem1Seg' ref={elementoRefSem1Seg}>{semanaA.letra}</td>
                <td id='sem1Ter' ref={elementoRefSem1Ter}>{semanaB.letra}</td>
                <td id='sem1Ter' ref={elementoRefSem1Qua}>{semanaC.letra}</td>
                <td id='sem1Qui' ref={elementoRefSem1Qui}>{semanaD.letra}</td>
                <td id='sem1Sex' ref={elementoRefSem1Sex}>{semanaA.letra}</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td id='sem2Seg' ref={elementoRefSem2Seg}>{semanaB.letra}</td>
                <td id='sem2Ter' ref={elementoRefSem2Ter}>{semanaC.letra}</td>
                <td id='sem2Ter' ref={elementoRefSem2Qua}>{semanaD.letra}</td>
                <td id='sem2Qui' ref={elementoRefSem2Qui}>{semanaA.letra}</td>
                <td id='sem2Sex' ref={elementoRefSem2Sex}>{semanaB.letra}</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td id='sem3Seg' ref={elementoRefSem3Seg}>{semanaC.letra}</td>
                <td id='sem3Ter' ref={elementoRefSem3Ter}>{semanaD.letra}</td>
                <td id='sem3Qua' ref={elementoRefSem3Qua}>{semanaA.letra}</td>
                <td id='sem3Qui' ref={elementoRefSem3Qui}>{semanaB.letra}</td>
                <td id='sem3Sex' ref={elementoRefSem3Sex}>{semanaC.letra}</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td id='sem4Seg' ref={elementoRefSem4Seg}>{semanaD.letra}</td>
                <td id='sem4Ter' ref={elementoRefSem4Ter}>{semanaA.letra}</td>
                <td id='sem4Qua' ref={elementoRefSem4Qua}>{semanaB.letra}</td>
                <td id='sem4Qui' ref={elementoRefSem4Qui}>{semanaC.letra}</td>
                <td id='sem4Sex' ref={elementoRefSem4Sex}>{semanaD.letra}</td>
              </tr>              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Teste