import { useState } from 'react';
let idx=0
export default function App() {
  const [inputValue , setinputValue] = useState('');
  const [storeValue, setstoreValue] = useState([]);
  const [edit,setEdit]=useState(false);
  const [changeValue,setchangeValue]=useState('');
  function deleteFunction(id){
    const newVal=[...storeValue]
    newVal.splice(id,1);
    setstoreValue([...newVal] )
  }
  function updateFunction(id){
    idx=id
    setEdit(true)
  }
  function editFunction(){
    let tempList=[...storeValue]
    let tempobj={inputValue:changeValue}
    tempList.splice(idx,1,tempobj)
    setstoreValue(tempList)
    setEdit(false)
  }
  return (
    <>
      <h1>Todo list</h1>
      {!edit&&
      <form>

      <input
        
        onChange={e => setinputValue(e.target.value)}
      />
    </form>}
    
    {edit && <form><input type='text' onChange={e=> setchangeValue(e.target.value)}></input> <button onClick={()=>editFunction()}>save</button>  </form>}
      <button type="reset" onClick={() => {
        setstoreValue([
          ...storeValue,
          { inputValue: inputValue }
        ]);
      }}>Add</button>
    
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
                  
