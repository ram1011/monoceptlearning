import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommnetDetail";
import Approvalcard from "./Approvalcard";
import faker from "faker";
const App = () => {
  return (
    <div className="ui comments">
      {/* <h3 className="ui dividing header">Comments</h3> */}
      <Approvalcard>
        <CommentDetail author="Sreeram" imagesrc={faker.image.image()} />
      </Approvalcard>
      <Approvalcard>
        <CommentDetail author="Anusha" imagesrc={faker.image.image()} />
      </Approvalcard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
