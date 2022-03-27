import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { userActionCreator } from "./Stores/ActionCreator";

function App() {
  const userRef = useRef();
  const userData = useSelector((state) => state.userManagements);
  const dispatch = useDispatch();
  const { Add, Remove } = bindActionCreators(userActionCreator, dispatch);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const id = Math.floor(Math.random() * 1000000) + 1;
          const user = {
            id,
            name: userRef.current.value,
          };
          Add(user);
          userRef.current.value = "";
          console.log(userData);
        }}
      >
        <input type="text" ref={userRef} />
        <button type="submit">submit</button>
      </form>

      <br />
      <br />

      <div>
        {userData.map((i) => (
          <p key={i.id} onClick={() => Remove(i.id)}>
            {i.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
