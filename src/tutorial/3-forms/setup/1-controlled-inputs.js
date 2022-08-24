import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [people,setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault() // sayfayı yeniden yüklemeyi önledik. 
    if (name && email) {
      console.log("formu gönder");
      const person = {id:new Date().getTime().toString(),name,email} //  {name:name,email:email yazmak yerine direkt name,email yazdık.ES6 ile gelen bir özellik.}
      // console.log(person) // person'a benzersiz olması için new Date kullarak id atadık.
      setPeople((people)=>{
        return [...people,person]  // spread operatörle önceki people değerinin üzerine person değerlerini ekledik.
        
      })
      setName("")
      setEmail("")
    }  else {
      console.log("boş değerler");
    }
  } 
  return(
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor="name">Name : </label>
            <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>     
          </div>
          <div className='form-control'>
            <label htmlFor="email">Email : </label>
            <input type="email" name="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} />  
          </div>
          <button type='submit'>Kişi Ekle</button>
        </form>
        {people.map((person)=>{
          const {id,name,email} = person
           return (
            <div className='item' key={id} >
                <h4>{name}</h4>
                <p>{email}</p>
            </div>
           )
        })}
      </article>
    </>
  )
};

export default ControlledInputs;
