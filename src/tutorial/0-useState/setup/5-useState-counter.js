import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value,setValue] = useState(0)
  // const handleUpdate = () => {
  //   setValue((p)=>p + 1)
  //   setValue((p)=>p + 1)
  //   console.log(value);
  // }

  // setValue(p +1 )
  // setValue(p +1 ) şeklinde iki kere value değerini çalıştırmak istediğimde bu aslında 2 kere setValue(0 + 1) demek.
  // yani re-render etmeden üstüne yazmayacak ve her seferinde birer birer artıracaktır.Bunu önlemek için setValue() içinde ok fonk.kullanmamız lazım.
  const reset = () => {
    setValue(0)
  }

  const karmaşıkArtış = () => {
    setTimeout(()=>{
      // setValue(value + 1)
      setValue((p) => p + 1)
    },2000)
  }

  return ( 
  <>  
    <section style={{margin:'4rem 0' }}>
      <h2>Normal Sayaç</h2>
      <h1>{value}</h1>
      <button className='btn' onClick= {()=>setValue((p)=>p - 1)}>azalt</button>
      <button className='btn' onClick= {reset}>reset</button>
      <button className='btn' onClick= {()=>setValue((p)=> p + 1)}>arttır</button>
    </section>

    <section style={{margin:'4rem 0' }}>
      <h2>Karmaşık Sayaç</h2>
      <h1>{value}</h1>
      <button className='btn' onClick={karmaşıkArtış}>Sonra arttır</button>
    </section>
  </>
  )
};

export default UseStateCounter;
