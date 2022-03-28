import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Edit } from "../Store/Actions/UserAction";
import { Toggle } from "../Store/Actions/ToggleAction";

const Editor = () => {
  const textRef = useRef();
  const dispatch = useDispatch();
  const id = useSelector((state) => state.id);
  const toggle = useSelector((state) => state.toggle);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      id,
      text: textRef.current.value,
    };

    dispatch(Edit(user));
    dispatch(Toggle(!toggle));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={textRef} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Editor;
