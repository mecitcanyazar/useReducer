import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [text,setText] = useState("")
  const [isError,setIsError] = useState(false)
  
  return ( 

  // || operatörğ kullandığımızda text || "mecit"" ve text değeri="" ise "mecit" ekranda görüntülecenek.
  // && operatörü kullandığımızda text && "mecit" ve text değeri=""  ise çıktı olarak bir şey görüntülenmeyecek.
  // eğer text = "ahmet" ise text && "mecit" dediğimizde ikinci değer olan "mecit " ekrana çıktı olarak yansıyacak.True ya da false durumlarının her ikisinde de ikinci değer esas alınır.
      // {text && <h1>hello world</h1>}
      // {!text && <h1>hello world</h1>} 
  <>
      <h1>{text || "Mecit"}</h1>  
      <button className='btn' onClick={()=>setIsError((s)=>!s)}>Toggle error</button>
      {isError && <h1>Error...</h1>}
      {isError
      // if kullanamayız çünkü if değer döndürmez , kısa devre operatörü ya da ternary kullanmamız lazım 
      ? (<p>hata var...</p>)
      : ( 
      <div>
        <h2>hata yok</h2>
      </div>
       )}
  </>
  )
};

export default ShortCircuit;
