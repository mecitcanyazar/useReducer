export const reducer = (state,action) => {
    if (action.type === 'ÖĞE_EKLE'){
      const yeniİnsanlar = [...state.people,action.payload]
      return {...state,
        people:yeniİnsanlar,
        isModalOpen:true,
        modalContent:"Öğe eklendi",
      }
    }
    // return state  // Her zaman bi state'i return etmem lazım.
    if(action.type === "DEĞER_YOK"){
      return {...state,
      isModalOpen:true,
      modalContent:"Lütfen bir değer giriniz",
    }
    }
    if(action.type === "MODAL_KAPAT"){
      return {...state,isModalOpen:false}
    }
    if(action.type === "ÖĞEYİ_KALDIR"){
      const yeniİnsanlar = state.people.filter((kişi)=>kişi.id !== action.payload)
      return {...state,people:yeniİnsanlar}
    }
  
    throw new Error ('Eşleşen eylem türü yok')
  }