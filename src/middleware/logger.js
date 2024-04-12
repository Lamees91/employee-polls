const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("The action: ", action.type);
  console.table(action);
  const result = next(action);
  console.log("The new state: ");
  console.table(store.getState());
  console.groupEnd();
  return result;
};

export default logger;
