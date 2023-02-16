import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement} from './createSlice';
import './App.css';

function App() {
  const {count} =  useSelector( state => state.counter );
  const dispatch =  useDispatch();

  // createSlice.js(스토어에 등록할 리듀서 작성)
  // store.js(리듀서를 등록)
  // index.js(사용할 수 있도록 스토어 활용)

  return (
    <div className="App">
      <button onClick={()=>dispatch(decrement(100))}> - </button>
      {count}
      <button onClick={()=>dispatch(increment(10))}> + </button>
    </div>
  );
}

export default App;
