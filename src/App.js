import styled from "styled-components";
import Form from "./Components/Form";
import User from "./Components/User";

const Container = styled.div`
  width: 300px;
  height: 100%;
  margin: 0 auto;
`;

const App = () => {
  return (
    <Container>
      <h1>Todo App</h1>
      <Form />
      <User />
    </Container>
  );
};

export default App;
