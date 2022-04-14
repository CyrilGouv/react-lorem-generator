import { useState } from 'react'
import { text } from './data'

import './App.css'

function App() {
  const [data, setData] = useState([])
  const [value, setValue] = useState(0)


  const handleParagraph = e => {

    const amount = parseInt(e.target.value)

    if (amount >= 0 && amount <= text.length) {
      setValue(amount)
      setData(text.slice(0, amount))
    }
      
  }

  return (
    <div className="App">
      <div className="app__wrapper">
        <div className="app__header">
          <h1 className="app__title">Lorem Ipsum Generator</h1>
          <form className="app__form">
            <div>
              <label htmlFor="paragraph">Paragraphs:</label>
              <input type="number" name="paragraph" className="app__input" min="0" max={ text.length } onChange={ handleParagraph } value={ value } />
            </div>
          </form>
        </div>

        <div className="app__body">
          
            { data.map((para, idx) => {
              return <p key={ idx }>{ para }</p>
            }) }
          
        </div>
      </div>
    </div>
  );
}

export default App;
