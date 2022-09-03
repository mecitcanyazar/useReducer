import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [age, setAge] = useState('')
  const [person, setPerson] = useState({name:"",email:"",age:""})
  const [people, setPeople] = useState([])

const handleChange = (e) => {
  const name = e.target.name
  const value = e.target.value
  setPerson({...person,[name] : value}) // name:value deseydik email inputuna da bir şey yazdığımda name değişecekti yani email ve yas inputları dinamik olarak değişmeyecekti.
}
const handleSubmit = (e) => {
  e.preventDefault()
  if(person.name && person.email && person.age){
    const newPerson = {...person,id:new Date().getTime().toString()}
    setPeople([...people,newPerson])
    setPerson({name:"",email:"",age:""})  
  }
}


  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   if (name && email) {
  //     console.log('formu gönder')
  //     const person = { id: new Date().getTime().toString(), name, email }
  //     console.log(person)
  //     setPeople((people) => {
  //       return [...people, person]
  //     })
  //     setName('')
  //     setEmail('')
  //   } else {
  //     console.log('boş değerler')
  //   }
  // }
  return (
    <>
      <article className='form'>
        <form >
          <div className='form-control'>
            <label htmlFor='name'>Name :</label>
            <input
              type='text'
              id='name'
              name='name'
              value={person.name}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email :</label>
            <input
              type='text'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Yaş :</label>
            <input
              type='number'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>Kişi ekle</button>
        </form>
        {people.map((person, index) => {
          const { id, name, email,age } = person
          return (
            <div className='item' key={id}>
              <h4>{name}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlledInputs
