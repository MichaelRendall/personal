import { createSlice } from "@reduxjs/toolkit";
import FlagList from "../../models/flag-interface";

interface FlagQuizInterface {
  activeFlags: FlagList[];
  completedFlags: FlagList[];
  currentFlag: number;
  gameCompleted: boolean;
  score: number;
  scoreSubmitted: boolean;
  answerRef: React.RefObject<HTMLInputElement> | null;
  finalTime: number;
}

const flagQuizSlice = createSlice({
  name: "flagQuiz",
  initialState: {
    activeFlags: [],
    completedFlags: [],
    currentFlag: 0,
    gameCompleted: false,
    score: 0,
    scoreSubmitted: false,
    answerRef: null,
    finalTime: 0,
  } as FlagQuizInterface,
  reducers: {
    resetGame(state, action) {
      state.activeFlags = action.payload.activeFlags;
      state.completedFlags = [];
      state.gameCompleted = false;
      state.score = 0;
      state.finalTime = 0;
    },
    nextFlag(state, action) {
      state.answerRef = null;

      const arrayLength = state.activeFlags.length;
      let newFlag =
        action.payload === "plus"
          ? state.currentFlag + 1
          : state.currentFlag - 1;

      if (newFlag < 0) {
        newFlag = arrayLength - 1;
      }
      if (newFlag >= arrayLength) {
        newFlag = 0;
      }

      state.currentFlag = newFlag;
    },
    correctAnswer(state, action) {
      state.activeFlags = action.payload.activeFlags;
      state.completedFlags = action.payload.completedFlags;
      state.score = action.payload.score;
    },
    completedGame(state, action) {
      state.gameCompleted = action.payload;
    },
    changeFlag(state, action) {
      state.currentFlag = action.payload;
    },
    submittedScore(state, action) {
      state.scoreSubmitted = action.payload;
    },
    setTime(state, action) {
      state.finalTime = action.payload;
    },
  },
});

export const flagQuizActions = flagQuizSlice.actions;

export default flagQuizSlice;
