export function addLike(index) {
  return {
    type: 'ADD_LIKE',
    index
  };
}

export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  };
}

export function removeComment(postId, index) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    index
  };
}

// export function addPost(...) {
//   return {
//     type: 'ADD_POST',
//     //...
//   }
// }
