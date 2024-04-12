import { showLoading, hideLoading } from "react-redux-loading-bar";

import { createQuestion, receiveUsers, saveAnswer } from "./users";

import { AddQuestion, receiveQuestions, saveVote } from "./questions";

import { getAllData, saveQuestion, saveQuestionAnswer } from "../dataUtils/api";

const handleInitialData = () => async (dispatch) => {
  dispatch(showLoading());
  const { users, questions } = await getAllData();
  dispatch(receiveUsers(users));
  dispatch(receiveQuestions(questions));
  dispatch(hideLoading());
};

export default handleInitialData;
