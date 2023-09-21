import './App.css'
import CalculatorDisplay from './components/Display'
import CalculatorKeypad from './components/Keypad'

function App() {

  return (
    <div className='calculator-body'>
      <CalculatorDisplay/>
      <CalculatorKeypad/>
    </div>
  )
}

export default App
