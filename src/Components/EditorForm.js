import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { Edit } from "../Stores/Reducers/TodoSlider";
import { toggle } from "../Stores/Reducers/ToggleSlider";

function EditorForm() {
  const toggleState = useSelector((state) => state.toggle);
  const dispatch = useDispatch();
  const textRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const setData = {
      id: toggleState.id,
      text: textRef.current.value,
    };
    dispatch(Edit(setData));
    dispatch(toggle({ con: !toggleState, id: "" }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" id="text" autoComplete="off" ref={textRef} />
        <input type="submit" name="submit" value={"Add"} />
      </form>
    </>
  );
}

export default EditorForm;
