import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { addTodo, deleteTodo, editTodo, removeList } from './actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [inputState, setInputState] = useState('');
  const [editClicked, setEditClicked] = useState(false);
  const [editItem, setEditItem] = useState('');
  const [editInputState, setEditInputeState] = useState('');
  const dispatch = useDispatch();
  const listData = useSelector((state) => state.TodoReducer.list);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Add your list here</h1>
        {!editClicked ? (
          <div style={{ width: '50%' }}>
            <input 
              type="text" 
              placeholder='Add list item' 
              value={inputState}
              onChange={(e) => setInputState(e.target.value)}
              style={{ width: '50%', padding: '10px', fontSize: '16px', fontWeight: 'bold' }} 
            />
            <i className='fa fa-plus' onClick={() => dispatch(addTodo(inputState), setInputState(''))} style={{ padding: '10px', alignItems: 'center', background: 'blue', cursor: 'pointer' }}></i>
          </div>
        ) : (
          <div style={{ width: '50%' }}>
            <input 
              type="text" 
              placeholder='Update list item' 
              value={editInputState}
              onChange={(e) => setEditInputeState(e.target.value)}
              style={{ width: '50%', padding: '10px', fontSize: '16px', fontWeight: 'bold' }} 
            />
            <i className='fa fa-edit' onClick={() => {
                dispatch(editTodo(editItem?.id, editInputState));
                setEditClicked(false);
              }} style={{ padding: '10px', alignItems: 'center', background: 'blue', cursor: 'pointer' }}></i>
          </div>
        )}

        {listData.map((item, index) => (
          <div style={{ width: '50%', marginTop: '20px' }} key={index}>
            <input type="text" readOnly value={item.data} style={{ width: '50%', padding: '10px', background: 'blue', color: 'white', fontSize: '14px', cursor: 'pointer' }} />
            <i className='fa fa-edit' onClick={() => {
                setEditItem(item);
                setEditInputeState(item.data);
                setEditClicked(true);
              }} style={{ padding: '10px', alignItems: 'center', background: 'white', color: 'blue', cursor: 'pointer' }}></i>
            <i className='fa fa-trash' onClick={() => dispatch(deleteTodo(item.id))} style={{ padding: '10px', alignItems: 'center', background: 'white', color: 'blue', cursor: 'pointer' }}></i>
          </div>
        ))}

        {listData.length != 0 ? (
          <button style={{ marginTop: '20px', padding: '10px', color: 'blue', fontSize: '16px', fontWeight: 'bold' }} onClick={() => dispatch(removeList())}>Remove List</button>
        ): null}
      </header>
    </div>
  );
}

export default App;
