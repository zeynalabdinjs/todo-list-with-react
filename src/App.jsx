import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Todolist from './components/Todolist';
import { setData } from './store/todos';



function App() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input !== "") {
      dispatch(setData(input))
    }
    setInput("")
  }


  const handleChange = (e) => {
    setInput(e.target.value)
  }






  return (
    <div className="App container-fluid py-4 min-vh-100 w-100">
      <div className="row d-flex justify-content-center mb-2">
        <h3 className='text-center text-success text-uppercase fw-bold'>&#10004; TodoList</h3>
        <form className='d-flex justify-content-center mt-2' onSubmit={(e) => handleSubmit(e)}>
          <div className="input-group">
            <input type="text" className='form-control' placeholder='Bu gün nələr edəcəyik ?' value={input} id="add-todo" onChange={(e) => handleChange(e)} />
            <button type='submit' className='btn btn-custom'>Əlavə et</button>
          </div>
        </form>
      </div>
      <div className="row d-flex justify-content-center">
        <Todolist />
      </div>
    </div>
  );
}

export default App;
