import React, { useState } from 'react';

const UseStateBasics = () => {
  // useState bir arraydir ve 0 ve 1.elementi vardır.
  // useState iki parametre alır.İlki durum değeri,ikincisi ise bunun değiştirdiğimde çalışacak olan callback function.Bu değer dizi,dize ya da obje de olabilir.
  
  // console.log(useState('hello world'));
  // const değer = useState(1)[0]   // değer = 1 dedik.
  // const handler = useState(1)[1]
  // console.log(değer,handler);

    const [text,setText] = useState("rastgele başlık")
    // usestate arrayini destructure ile parçalamış olduk.

    const handleClick = () => {
    //   if(text === "rastgele başlık"){
    //     setText("selam millet")
    //   } else{
    //     setText("rastgele başlık")
    //   }
    // Bunun yerine ;
    setText("selam millet")
    }
  return (

  // HTML kısmında DOM ağacında düğüm oluşturmadan yani memory'de yer kaplamadan oluşturduğumuz jsx formatını sarmamızı sağlıyor.(div yerine)
    <React.Fragment>
     <h1>{text}</h1>
     <button className='btn' onClick = {handleClick}>Başlığı Değiştir</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
