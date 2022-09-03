import React from 'react'
import { useState } from 'react'
import {data} from '../../../data'

const App = () => {
    const [people,setPeople] = useState(data)
    const removeItem = (id) => {
        setPeople((oldPeople)=>{
            let newPeople = oldPeople.filter((person)=>person.id !== id)
            return newPeople
        })
    }
  return (
    <>
    {people.map((person)=>{
        const {id,name} = person
        return (
            <div key={id} className="item">
                <h4>
                    {name}
                </h4>
                <button onClick={()=>removeItem(id)}>
                    Kaldır
                </button>
            </div>
        )
    })}
    <button className="btn "onClick={()=>setPeople([])}>Temizle</button>
    <button className='btn' onClick={()=> setPeople(data)}>Yeniden Yükle</button>
      
    </>
  )
}

export default App
