import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import quotes from './json/quotes.json'

const arrayColors = [
  '#6B4A0A', '#304377', '#A3145A', '#9681D7', '#2E643F', '#B93D3F', '#7E10BE'
]

function App() {

const createNumberRandom = array => {
  return Math.floor(Math.random() * array.length)
 }

 const getElementRandom = array => {
   const i = createNumberRandom(array)
   return array[i]
 }

 const [quotesRandom, setQuotesRandom] = useState(getElementRandom(quotes))
 const [colorRandom, setColorRandom] = useState(getElementRandom(arrayColors))

 const clickButton = () =>{
  setQuotesRandom(getElementRandom(quotes))
  setColorRandom(getElementRandom(arrayColors))
 }

 const appStyle = {
   backgroundColor: colorRandom
 }

return (
  <div style={appStyle} className="App">          
     <Card     
      quotesRandom={quotesRandom}     
      colorRandom={colorRandom}
      clickButton={clickButton}
      />
  </div>
  )
}

export default App