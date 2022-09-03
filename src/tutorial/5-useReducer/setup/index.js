import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import {reducer} from './reducer'
// reducer function


const defaultState = {
  people:[],
  isModalOpen:false,
  modalContent : "hello world",
}

const Index = () => {
  const [name,setName] = useState("")

  const [state,dispatch] = useReducer(reducer,defaultState)

  // const [people,setPeople] = useState(data)
  // const [showModal,setShowModal] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name) {
      const yeniÖğe = {id:new Date().getTime().toString(),name}
      dispatch({type:'ÖĞE_EKLE',payload:yeniÖğe})  
      setName("")
    }else{
      dispatch({type:"DEĞER_YOK"})
        // dispatchi çağırdığımızda şablonu bu şekilde.
    }
  }

  const closeModal = () => {
    dispatch({type:"MODAL_KAPAT"})
  }

  return ( 
  <>
    {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
    <form onSubmit={handleSubmit} className="form">
      <div>
        <input
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <button type='submit'>Ekle</button>
    </form>
    {state.people.map((person)=>{
      return <div key={person.id} className="item">
        <h4>{person.name}</h4>
        <button onClick={()=>dispatch({type:"ÖĞEYİ_KALDIR",payload:person.id})}>Kaldır</button>
      </div>
    })}
  </>
  )
};

export default Index;
