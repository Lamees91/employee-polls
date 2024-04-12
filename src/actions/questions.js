export const ADD_QUESTION = "ADD_QUESTION";
export const AddQuestion = (question) => ({
  type: ADD_QUESTION,
  question,
});

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const receiveQuestions = (questionsList = []) => ({
  type: RECEIVE_QUESTIONS,
  questionsList,
});

export const SAVE_VOTE = "SAVE_VOTE";
export const saveVote = (authhedUser, qId, answer) => ({
  type: SAVE_VOTE,
  authhedUser,
  qId,
  answer,
});
