import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { useReducer } from 'react';
import reducer, { initState } from './reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div className='App'>
      <p>Hello</p>
      <button onClick={() => dispatch({ type: 'Add', amount: 10 })}>Add</button>
      <button onClick={() => dispatch({ type: 'Remove', amount: 10 })}>
        Remove
      </button>
      <p>{state.amount}</p>
<p>{state.amount}</p>
        <Navbar/>
    </div>
  );
}

export default App;
