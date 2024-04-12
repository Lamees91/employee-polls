import { RECEIVE_USERS, SAVE_ANSWER, CREATE_QUESTION } from "../actions/users";

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.usersList,
      };

    case SAVE_ANSWER:
      return {
        ...state,
        [action.uId]: {
          ...state[action.uId],
          answers: {
            ...state[action.uId],
            answers: {
              ...state[action.uId].answers,
              [action.qId]: action.aId,
            },
          },
        },
      };

    case CREATE_QUESTION:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: [action.qid].concat(state[action.author].questions),
        },
      };

    default:
      return state;
  }
};

export default users;
