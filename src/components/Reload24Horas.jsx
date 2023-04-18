import React, { useEffect } from 'react'

const Reload24Horas = () => {

    useEffect(()=>{
        const MILESEGUNDOS_IN_DAY = 5 * 60 * 60 * 1000
        function reloadPage(){
            window.location.reload();
            console.log("fez o reload...")
        }
        const intervalId = setInterval(reloadPage, MILESEGUNDOS_IN_DAY)
        return () => clearInterval(intervalId)
    },[])


  return (
    <div>
        
    </div>
  )
}

export default Reload24Horas