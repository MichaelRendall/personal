import Wrapper from "../UI/Wrapper";
import Form from "../FormElements/Form";
import Input from "../FormElements/Input";
import Button from "../FormElements/Button";
import useFetch from "../../hooks/useFetch";
import { useContext, useRef, useState } from "react";
import { FlagContext } from "../../context/flag-context";
import Spinner from "../UI/Spinner";

interface SubmitScoreProps {
  endGame: () => void;
}

const SubmitScore: React.FC<SubmitScoreProps> = (props) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const flagCtx = useContext(FlagContext);
  const nicknameRef = useRef<HTMLInputElement>(null);
  const { isLoading, error, sendRequest } = useFetch();

  const submitScoreHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    await sendRequest({
      url: `${
        process.env.API_URL || "http://localhost:8080/"
      }flag-quiz/submit-score`,
      method: "POST",
      body: {
        nickname: nicknameRef.current!.value,
        score: flagCtx.score,
      },
    });
    if (!error) {
      setFormSubmitted(true);
    }
  };

  return (
    <Wrapper>
      {!formSubmitted && (
        <>
          <h2>Congratulations!</h2>
          <Form onSubmit={submitScoreHandler}>
            <Input
              id="nickname"
              placeholder="Nickname"
              type="text"
              label="Nickname"
              refValue={nicknameRef}
            />
            <Button name="Submit Score" submit fullWidth />
          </Form>
        </>
      )}
      {formSubmitted && (
        <>
          <h2>Score Submitted</h2>
          <Button name="End Game" onClick={props.endGame} invert />
        </>
      )}
      {isLoading && <Spinner />}
      {error && <small className="error">{error}</small>}
    </Wrapper>
  );
};

export default SubmitScore;
