import { useDispatch, useSelector } from "react-redux";
import { Add } from "./Stores/Actions/TodoAction";

function App() {
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  const handelClick = () => {
    dispatch(Add(50));
  };

  return (
    <>
      <div>Balance:{balance}</div>
      <button onClick={handelClick}>Click</button>
    </>
  );
}

export default App;
