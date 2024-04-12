export const RECEIVE_USERS = "RECEIVE_USERS";
export const receiveUsers = (usersList = []) => ({
  type: RECEIVE_USERS,
  usersList,
});

export const SAVE_ANSWER = "SAVE_ANSWER";
export const saveAnswer = (uId, qId, aId) => ({
  type: SAVE_ANSWER,
  uId,
  qId,
  aId,
});

export const CREATE_QUESTION = "CREATE_QUESTION";
export const createQuestion = (qId, author) => ({
  type: CREATE_QUESTION,
  qId,
  author,
});
