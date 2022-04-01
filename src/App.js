import { useId, useReducer, useRef } from "react";

const initialState = [];

function reducers(state, action) {
  switch (action.type) {
    case "Add":
      return (state = [...state, action.payload]);
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducers, initialState);
  const textRef = useRef();
  const id = useId();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id,
      text: textRef.current.value,
    };
    dispatch({
      type: "Add",
      payload: data,
    });
    textRef.current.value = "";
  };
  return (
    <div style={{ width: "500px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">ToDo</label>
        <br />
        <input type="text" id="text" ref={textRef} autoComplete="off" />
        <input type="submit" value="Add" />
      </form>
      <div>
        {state.map((i) => (
          <p key={i.id}>{i.text}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
