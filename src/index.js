import React from "react";
import ReactDom from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const arrayOfComments = [
  { author: "Sam", timeAgo: "Today at 6pm", text: "Nice Post" },
  { author: "Daniel", timeAgo: "3 days ago", text: "Cool Story" },
  { author: "Jenny", timeAgo: "Yesterday at 10pm", text: "This is so boring!" },
];

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>Are you sure you want to do this?
        </div>
      </ApprovalCard>
      {arrayOfComments.map((comment, index) => {
        return (
          <ApprovalCard key={Math.floor(Math.random() * 999)}>
            <CommentDetail
              author={comment.author}
              timeAgo={comment.timeAgo}
              text={comment.text}
              avatar={faker.image.avatar()}
              key={index}
            />
          </ApprovalCard>
        );
      })}
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
