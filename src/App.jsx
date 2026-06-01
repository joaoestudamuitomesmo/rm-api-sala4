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
      <div className={s.top}>
      <img className={s.logo} src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-rick-flying-transparent-png-stickpng-15.png" alt="" />
        <label htmlFor="">Search name</label>
        <input type="text" placeholder='Input the character name'/>
      </div>
      <main>
        <div className={s.pessoasGridResenhuda}> 
          {data.map((item, index) => {
            return(
              <div>
                <img src={item.image} alt={item.name} />
                <h2>{item.name}</h2>
                <p>{item.species}</p>
                <p>{item.status === "Dead" ? "Morreu 💀" : item.status === "Alive" ? "Vivinho da silva🧬" : "Não sei 😶"}</p>
                <p>Origin : {item.origin.name}</p>
              </div>
            )
          })}
        </div>

      </main>
    </>
  )
}

export default App