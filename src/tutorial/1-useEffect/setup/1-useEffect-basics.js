import React, { useState, useEffect } from 'react'
// varsayılan olarak her yeniden oluşturma işleminden sonra çalışır
// temizleme işlevi
// ikinci parametre
const UseEffectBasics = () => {
  const [value,setValue] = useState(0)
  useEffect(()=>{
    console.log(" useEffect çağrıldı.");
    //useEffect her render'dan sonra çalışacak.
    if(value >= 1){
    document.title = `Yeni mesajlar(${value})`
  }
  },[value])
  // value değeri her değiştiğinde useEffect çalışacak eğer gereklilik dizisini boş bırakırsak sayfa ilk yüklendiğinde sadece çalışacak.

  console.log("bileşen işlendi."); // render
  return (
  <>
    <h1>{value}</h1>
    <button className='btn' onClick = {()=>setValue((p)=>p + 1)}>Tıklayın</button>
  </>
   )
}

export default UseEffectBasics
