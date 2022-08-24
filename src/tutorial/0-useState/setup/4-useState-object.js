import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson] = useState({
    name:"Mecit Can",
    age:28,
    message:"rastgele mesaj"
  })
  console.log(person);
  const [name,setName] = useState("mecit")
  const [age,setAge] = useState(28)
  const [message,setMessage] = useState("rastgele mesaj")
  
  const changeMessage = () => {
      // setPerson({ ...person,message:"hello world" })
    // setPerson({message:"hello world"}) dediğimde person objesi içindeki diğer özellikleri silecek ve sadece message ekranda görüntülenecek.
    // Diğer özellikleri de göstermek için spread operatör kullanıyorumç(...person,message)

    setMessage("Hello world")
  }
  return ( 
  <>
    {/* <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className='btn' onClick={changeMessage}>Mesajı Değiştir</button> */}
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className='btn' onClick={changeMessage}>Mesajı Değiştir</button>
  </>
  )
};

export default UseStateObject;
