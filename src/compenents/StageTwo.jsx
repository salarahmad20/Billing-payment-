import { useContext } from "react";
import { MyContext } from "../Context/MyProvider";
const StageTwo = () => {
  const context =useContext(MyContext)
return(<>

<div className="result_wrapper">
  <h3>The Loser Is: </h3>
  {context.result}
</div>
<div className="action_button" onClick={()=> context.resetGame()}> Start Over</div>
<div className="action_button  btn_2" onClick={() => context.genrateLoser()}>Get new losser</div>
</>)
}
export default StageTwo;