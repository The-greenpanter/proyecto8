import './styles/App.css'
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap CSS
import { AppRouter } from './AppRouter'

function App() {


  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Ejercicio con Context API en React</h1>
        <AppRouter/>
      </header>
    </div>
  )
}

export default App