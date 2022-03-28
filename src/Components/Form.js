import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Add } from "../Store/Actions/UserAction";
import { useRef } from "react";

const FormContainer = styled.div`
  input[type="text"] {
    margin-right: 5px;
  }
`;

const Form = () => {
  const textRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 10000) + 1;

    const user = {
      id,
      text: textRef.current.value,
    };

    dispatch(Add(user));

    textRef.current.value = "";
  };

  return (
    <FormContainer>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" ref={textRef} />
        <input type="submit" />
      </form>
    </FormContainer>
  );
};

export default Form;
