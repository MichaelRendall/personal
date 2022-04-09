import { useLocation } from "react-router";
import { useRef } from "react";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { flagQuizActions } from "../../store/flag-quiz/flag-quiz-slice";

import Wrapper from "../UI/Wrapper";
import Form from "../FormElements/Form";
import Input from "../FormElements/Input";
import Button from "../FormElements/Button";
import useFetch from "../../hooks/useFetch";
import Spinner from "../UI/Spinner";

interface SubmitScoreProps {
  endGame: () => void;
}

const SubmitScore: React.FC<SubmitScoreProps> = (props) => {
  const dispatch = useAppDispatch();
  const score = useAppSelector((state) => state.flagQuiz.score);
  const finalTime = useAppSelector((state) => state.flagQuiz.finalTime);
  const scoreSubmitted = useAppSelector(
    (state) => state.flagQuiz.scoreSubmitted
  );

  const nicknameRef = useRef<HTMLInputElement>(null);
  const { isLoading, error, sendRequest } = useFetch();
  const location = useLocation();

  const submitScoreHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    const queryParams = new URLSearchParams(location.search);
    const filters = queryParams.entries();

    let filterList = { continent: "all" };
    for (const filter of filters) {
      const filterName = filter[0].split("-");

      filterList = { ...filterList, [filterName[1]]: filter[1] };
    }

    await sendRequest({
      url: `${
        process.env.REACT_APP_API_URL || "http://localhost:8080"
      }/flag-quiz/submit-score`,
      method: "POST",
      body: {
        nickname: nicknameRef.current!.value,
        score: score,
        time: finalTime,
        filter: filterList,
      },
    });
    if (!error) {
      dispatch(flagQuizActions.submittedScore(true));
    }
  };

  return (
    <Wrapper>
      {!scoreSubmitted && (
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
      {scoreSubmitted && (
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
