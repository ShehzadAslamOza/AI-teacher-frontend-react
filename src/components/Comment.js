import React from "react";

const Comment = ({ comment }) => {
  return (
    <div>
      <p className="comment">{comment.comment}</p>
    </div>
  );
};

export default Comment;
