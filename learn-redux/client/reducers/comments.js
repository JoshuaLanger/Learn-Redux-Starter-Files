// A reducer takes in the action and current store with state, and returns a new store

// [actions, currentStore] => reducer => rootReducer => newStore

function comments(state = [], action) {
  console.log(state, action);
  return state;
}

export default comments;
