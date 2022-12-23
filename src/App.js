import {useReducer} from 'react'
import './App.css';
import buttonReducer from './reducers/buttonaction.js'

function App() {

  const [state, dispatch] = useReducer(buttonReducer, 0);

  return (
    <>
      Count: {state}
      <button onClick={()=>dispatch({type:'increment'})}>+</button>
      <button onClick={()=>dispatch({type:'decrement'})}>-</button>
    </>
  );
}

export default App;
