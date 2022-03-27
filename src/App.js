import { useSelector, useDispatch } from "react-redux";
import { Wrong, Right } from "./Stores/Actions/LoginAction";
import { Add, Remove } from "./Stores/Actions/BalanceAction";

const App = () => {
  const login = useSelector((state) => state.login);
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  const handleMember = () => {
    dispatch(Right(true));
    dispatch(Add(100));
  };

  const handleMemberTwo = () => {
    dispatch(Wrong(false));
    dispatch(Remove(50));
  };

  return (
    <div>
      <h1>{login ? "Member" : "Guest"}</h1>
      <hr />
      <h1>AccountBalance:{balance}</h1>
      <hr />
      <button onClick={handleMember}>Add</button>
      <button onClick={handleMemberTwo}>Remove</button>
    </div>
  );
};

export default App;
