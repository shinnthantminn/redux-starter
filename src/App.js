import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { accountActionCreators } from "./Stores/actionCreators";

function App() {
  const balance = useSelector((state) => state.accountBalance);
  const dispatch = useDispatch();
  const { Add, Remove } = bindActionCreators(accountActionCreators, dispatch);

  return (
    <div>
      <h1>account Balance Result</h1>
      <p>result : {balance}</p>
      <button onClick={(_) => Add(50)}>Add</button>
      <button onClick={(_) => Remove(50)}>Remove</button>
    </div>
  );
}

export default App;
