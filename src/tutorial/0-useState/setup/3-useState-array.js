import React from 'react';
import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people,setPeople] = React.useState(data)
  // import {useState} demediğim için yukarıda,burada React.useState olarak çağırmam lazım.
  const removeItem = (id) => {
     setPeople((oldPeople)=>{
      let newPeople = oldPeople.filter((person) => person.id !==id)
      // Sadece kaldırmak istediğim elemanı kaldırı.=== deseydim o eleman dışındaki diğer elemanları kaldıracaktı.
      return newPeople
     })
  }
  return ( 
    // <> </> -------> React.Fragment'ın yeni kullanımı.
    <>
    {people.map((person)=>{
      // useState(data) ile data'yı persona atadık.
    const {id,name} = person
    return (
      <div key={id} className="item">
        <h4>{name}</h4>
        <button onClick={()=> removeItem(id)}>Kaldır</button>
      </div>
      // buton içindeki ok fonkiyounu olmasaydı removeItem hemen çalışacaktı ancka biz butona tıkladığımızda çalışsın istiyoruz o yuzden ok fonk.kullanmamız lazım.
       )
    })}
  
    <button className='btn' onClick={()=> setPeople([])}>Temizle</button> 
    </>
    // Yukarıda buton içindeki onClick'te setpeople callback func.içinde değil de direkt olarak setPeople([]) deseydim butona tıkladığımda değil de direkt olarka en baştan dizeyi temizlemiş olurdu.
)
  
};

export default UseStateArray;
