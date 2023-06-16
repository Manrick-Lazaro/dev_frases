import logo  from "./assets/logo.png"
import './App.css'
import { useState } from "react"
import frases from "./frases"

function App() {
  const [text, setText] = useState("")
  const [categorieSelected, setCategorieSelected] = useState(0)
  
  function categorieSelection(id: number) {
    setCategorieSelected(id - 1)
  }

  function handleText() {
    const index = Math.floor(Math.random() * frases[categorieSelected].texts.length)
    setText(frases[categorieSelected].texts[index])
  }

  return (
    <div className='container'>
      <img className="logo" src={logo} alt="logo da dev frases" />
      
      <h2 className='title'>Categorias</h2>

      <section className='categories_section'>
        {frases.map( (item, index) => (
          <button 
            className='button_category' 
            key={item.id}
            style={{
              borderWidth: item.categorie === frases[categorieSelected].categorie ? 2 : 0,
              borderColor: "#1fa4db"
            }}
            onClick={() => categorieSelection(item.id)}
          >
            {item.categorie}
          </button>
        ))}        
      </section>

      <button className='button_text_generate' onClick={handleText}>Gerar Frase</button>

      { text != "" && <p className='text'>"{text}"</p> }
    </div>
  )
}

export default App
