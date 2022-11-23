import './App.css';
import { FcHome } from "react-icons/fc";
import Form from './components/Form';

// control C to stop server, npm start to start server
// display = font-size, mb = margin-bottom
function App() {
  return (
    <div className='box'>
      <div className="App" style={{maxWidth: 500}}>
        <h1 className='display-1 mb-1'>
          <FcHome />
        </h1>
        <h1 className='display-3 mb-4'>
          Mortgage Calculator
        </h1>
        <Form />
      </div>
    </div>
  );
}

export default App;
