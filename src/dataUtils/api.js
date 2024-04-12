import { _getUsers, _getQuestions } from "./_Data";
import { _saveQuestion, _saveQuestionAnswer } from "./_Data";

export function getAllData() {
  return Promise.all([_getUsers(), _getQuestions()])
    .then(([users, questions]) => ({ users, questions }))
    .catch((err) => {
      console.log("Error in fetching data:", err);
    });
}

export function saveQuestion(q) {
  return _saveQuestion(q).catch((err) => {
    console.log("Error in save question:", err);
  });
}

export function saveQuestionAnswer(authedUser, qid, answer) {
  return _saveQuestionAnswer({ authedUser, qid, answer }).catch((err) => {
    console.log("Error in save question answer", err);
  });
}
