import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  loginActionCreators,
  BalanceActionCreators,
} from "./Stores/ActionCreators";

const App = () => {
  const login = useSelector((state) => state.login);
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();
  const { Right, Wrong } = bindActionCreators(loginActionCreators, dispatch);
  const { Add, Remove } = bindActionCreators(BalanceActionCreators, dispatch);

  const handleMember = () => {
    Right(true);
    Add(100);
  };

  const handleMemberTwo = () => {
    Wrong(false);
    Remove(50);
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
