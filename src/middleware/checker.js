import { ADD_QUESTION } from "../actions/questions";

const checker = (store) => (next) => (action) => {
  if (
    action.type === ADD_QUESTION &&
    action.question.author.toLowerCase().includes("null")
  ) {
    return alert("Nope. That's a bad idea.");
  }

  return next(action);
};

export default checker;
