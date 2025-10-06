import { useContext, useRef, useState } from "react";
import {Alert, Button, Form } from "react-bootstrap";
import { MyContext } from "../Context/MyProvider";

const StageOne = () => {
  const textinput = useRef();
  const context = useContext(MyContext);
  const [error, setError] =useState([false,""]);
  const handleSubmit =(e) => {
   e.preventDefault(); //stop loading 
   const value =textinput.current.value;
 const validate =validateInput(value);
 if(validate){
  setError([false,""])
  context.addPlayers(value);
  textinput.current.value ="";
  }
   };

   const validateInput = (value) => {
    if(value===''){
      setError([true,"You Need to enter something "]);
      return false;
    }
    if(value.length <=2){
      setError([true,"sorry you neeed three character "]);
      return false;
    }
    return true;
   };

return(<>
<form className="mt-4" onSubmit={handleSubmit}>
  <Form.Group>
 <Form.Control type="text" placeholder="Add Player Name " name="Player " ref={textinput}/>
</Form.Group>
{error [0] ? <Alert>{error[1]}</Alert> : null}
<Button className="miami" variant="primary" type="submit">Add Player</Button>

{context.players && context.players.length > 0 ? (
  <>
  <hr />
  <div>
    <ul className="list-group">
      {context.players.map((player,idx ) => (
        <li key={idx}  className="list-group-item   d-flex    justify-content-between  align-items-center  list-group-item-action"> {player}
        <span className="badge badge-danger" onClick={()=>context.removePlayer(idx)}>X</span>
        </li>
      ))}
    </ul>
  </div>
  <div className="action_button" onClick={()=> context.next()}>Next</div>
  </>
):null}
</form>
</>)
}
export default StageOne ;