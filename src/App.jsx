import s from './App.module.css'
import { api } from './constants/api'
import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    api.get(`/character`).then((response) =>{
      setData(response.data.results)
      console.log(response.data.results)
    }).catch((error) => {
      console.error("deu ruim!!!!!!!!!!!! ", error)
    })
  }, [])

  return (
    <>
      <img className={s.logo} src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-rick-flying-transparent-png-stickpng-15.png" alt="" />
      <div>
        <label htmlFor="">Search name</label>
        <input type="text" placeholder='Input the character name'/>
      </div>
      <main>
        {data.map((item, index) => {
          return(
            <div>
              <h2>{item.name}</h2>
              <img src={item.image} alt={item.name} />
            </div>
          )
        })}
      </main>
    </>
  )
}

export default App