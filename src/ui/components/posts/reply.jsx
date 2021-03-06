import React, { Component } from "react";
import * as commentsActions from "../../actions/comments";

export default ({ postId, user, parentCommentId }) => {
  let comment = "";

  const postComment = () => {
    parentCommentId
      ? commentsActions.write(sessionId, {
          postId,
          parentCommentId,
          userName: user.name,
          userImage: user.image,
          message: comment.value,
          timestamp: Date.now()
        })
      : commentsActions.write(sessionId, {
          postId,
          userName: user.name,
          userImage: user.image,
          message: comment.value,
          timestamp: Date.now()
        });
  };

  return (
    <div>
      <input type="text" ref={input => (comment = input)} />
      <input type="button" value="Submit Comment" onClick={postComment} />
    </div>
  );
};
