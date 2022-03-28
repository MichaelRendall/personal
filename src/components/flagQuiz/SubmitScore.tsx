import Wrapper from "../UI/Wrapper";
import Form from "../FormElements/Form";
import Input from "../FormElements/Input";
import Button from "../FormElements/Button";

const SubmitScore = () => {
  const submitScore = () => {};

  return (
    <Wrapper>
      <h2>Congratulations!</h2>
      <Form onSubmit={submitScore}>
        <Input
          id="nickname"
          placeholder="Nickname"
          type="text"
          label="Nickname"
        />
        <Button name="Submit Score" submit fullWidth />
      </Form>
    </Wrapper>
  );
};

export default SubmitScore;
