import React from 'react'

export const GetSemana = () => {
 
    const today = new Date();
    const dayOfMonth = today.getDate()
    const dayPerWeek = 7;
    const weekOfMonth = Math.ceil( dayOfMonth / dayPerWeek)
    console.log("teste: " + weekOfMonth) 
  
  return (
    <div></div>
  )
}
