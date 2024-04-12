import {
  RECEIVE_QUESTIONS,
  SAVE_VOTE,
  ADD_QUESTION,
} from "../actions/questions";

const questions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return { ...state, ...action.questionsList };

    case SAVE_VOTE:
      return {
        ...state,
        [action.qId]: {
          ...state[action.qId],
          [action.answer]: {
            ...state[action.qId][action.answer],
            votes: [
              ...state[action.qId][action.answer].votes,
              action.authhedUser,
            ],
          },
        },
      };

    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    default:
      return state;
  }
};

export default questions;
