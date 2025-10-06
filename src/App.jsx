import 'bootstrap/dist/css/bootstrap.min.css';
import StageOne from './compenents/StageOne';
import StageTwo from './compenents/StageTwo';

import './App.css'
import { MyContext } from './Context/MyProvider';
import { useContext } from 'react';
import context from 'react-bootstrap/esm/AccordionContext';

const App = ()=>{
  const context = useContext(MyContext)
return (<>
<div className="wrapper">
  <div className="center-wrapper">
    <h1>Who pays the bill</h1>
    {context.stage === 1 ? <StageOne/> : <StageTwo/> }
  </div>
</div>
</>)
}

export default App;