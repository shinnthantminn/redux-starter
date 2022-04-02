import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { Add, remove } from "./Stores/Reducers/TodoSlider";
import { FiEdit } from "react-icons/fi";
import { BiTrash } from "react-icons/bi";
import { toggle } from "./Stores/Reducers/ToggleSlider";
import EditorForm from "./Components/EditorForm";

function App() {
  const TodoList = useSelector((state) => state.todo);
  const toggleState = useSelector((state) => state.toggle);
  const dispatch = useDispatch();
  const textRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = {
      id: Math.floor(Math.random() * 100000) + 1,
      text: textRef.current.value,
    };
    dispatch(Add(date));
    textRef.current.value = "";
  };

  const handleEdit = (id) => {
    const change = {
      con: !toggleState.con,
      id,
    };
    dispatch(toggle(change));
  };

  const handleDelete = (id) => {
    console.log(id);
    dispatch(remove(id));
  };

  return (
    <div style={{ width: "300px", margin: "200px auto" }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">TODO</label>
        <br />
        <input type="text" id="text" ref={textRef} autoComplete="off" />
        <input type="submit" name="submit" value={"Add"} />
      </form>
      <div>
        {!toggleState.con ? (
          TodoList.map((i) => (
            <div key={i.id} style={{ display: "flex", alignItems: "center" }}>
              <p>{i.text}</p>
              <FiEdit
                style={{ cursor: "pointer" }}
                onClick={() => handleEdit(i.id)}
              />
              <BiTrash
                style={{ cursor: "pointer" }}
                onClick={() => handleDelete(i.id)}
              />
            </div>
          ))
        ) : (
          <EditorForm />
        )}
      </div>
    </div>
  );
}

export default App;
