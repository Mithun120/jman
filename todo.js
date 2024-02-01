import { useState } from 'react';

export default function App() {
  const [inputValue , setinputValue] = useState('');
  const [storeValue, setstoreValue] = useState([]);
  const [edit,setEdit]=useState(false);
  function deleteFunction(id){
    const newVal=[...storeValue]
    newVal.splice(id,1);
    setstoreValue([...newVal] )
  }
  function updateFunction(id){
    setEdit(true)
  }
  function editFunction(){
    setEdit(false)
  }
  return (
    <>
      <h1>Todo list</h1>
      <form>
      <input
        
        onChange={e => setinputValue(e.target.value)}
      />
    {edit && <><input type='text'></input> <button onClick={editFunction()}>save</button></>}
      <button type="reset" onClick={() => {
        setstoreValue([
          ...storeValue,
          { inputValue: inputValue }
        ]);
      }}>Add</button>
      </form>
      <ul>
        {storeValue.map((a,id) => (<>
          <li key={id}>{a.inputValue}</li>
        <button onClick={()=>updateFunction(id)}>Edit</button>
        <button onClick={()=>deleteFunction(id)}>Delete</button></>
        ))}
        {/* <button onClick={}>Edit</button> */}
      </ul>
      
    </>
  );
}
