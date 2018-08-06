// A reducer takes in the action and current store with state, and returns a new store

// [actions, currentStore] => reducer => rootReducer => newStore

function posts(state = [], action) {
  console.log('the post will change...');
  console.log(state, action);
  return state;
}

export default posts;
