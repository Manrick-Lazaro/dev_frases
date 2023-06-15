import logo  from "./assets/logo.png"
import './App.css'

function App() {
  return (
    <div className='container'>
      <img className="logo" src={logo} alt="logo da dev frases" />
      
      <h2 className='title'>Categorias</h2>

      <section className='categories_section'>
        <button className='button_category'>Bem estar</button>
        <button className='button_category'>bom dia</button>
      </section>

      <button className='button_text_generate'>Gerar Frase</button>

      <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eligendi pariatur laboriosam dolorem reiciendis accusantium sint illum debitis soluta aut placeat error iste necessitatibus repudiandae reprehenderit, velit fugiat modi? Deserunt.</p>
    </div>
  )
}

export default App
