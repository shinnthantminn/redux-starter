import { useSelector, useDispatch } from "react-redux";
import { Add, Remove } from "./Stores/Actions/BalanceActions";

function App() {
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Account:{balance}</h1>
      <button
        onClick={() => {
          dispatch(Add(50));
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          dispatch(Remove(50));
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default App;
