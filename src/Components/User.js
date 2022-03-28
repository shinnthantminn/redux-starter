import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { GoTrashcan } from "react-icons/go";
import Editor from "./Editor";
import { FiEdit } from "react-icons/fi";
import { Remove } from "../Store/Actions/UserAction";
import { Toggle } from "../Store/Actions/ToggleAction";
import { Push } from "../Store/Actions/IdAction";

const UserContainer = styled.div`
  text-align: left;
  p {
    display: inline;
  }
`;
const User = () => {
  const user = useSelector((state) => state.user);
  const toggle = useSelector((state) => state.toggle);
  const dispatch = useDispatch();
  const drop = (id) => {
    dispatch(Remove(id));
  };
  const Edit = (e) => {
    dispatch(Toggle(!toggle));
    dispatch(Push(e));
  };
  return (
    <UserContainer>
      {toggle ? (
        <Editor />
      ) : (
        user.map((i) => (
          <div key={i.id}>
            <p>{i.text}</p>
            <GoTrashcan onClick={(_) => drop(i.id)} />
            <FiEdit onClick={() => Edit(i.id)} />
          </div>
        ))
      )}
    </UserContainer>
  );
};

export default User;
