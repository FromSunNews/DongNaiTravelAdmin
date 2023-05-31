import React,{ Fragment, useEffect, useRef } from "react";

// import * as Zuck from "zuck.js";
// import "zuck.js/dist/zuck.css";
import { Zuck } from 'zuck.js';
import 'zuck.js/css';

const Stories = (props) => {
  let ref = useRef(null);
  const stateStory = props.stories;
  window.onload = function exampleFunction() {
    document.querySelectorAll(".time").innerHTML = "00:00";
  };
  const timestamp = function () {
    var timeIndex = 0;
    var shifts = [
      35,
      60,
      60 * 3,
      60 * 60 * 2,
      60 * 60 * 25,
      60 * 60 * 24 * 4,
      60 * 60 * 24 * 10,
    ];

    var now = new Date();
    var shift = shifts[timeIndex++] || 0;
    var date = new Date(now - shift * 1000);

    return date.getTime() / 1000;
  };
  useEffect(() => {
    if (ref !== null) {
      const storyArr = [];
      stateStory.forEach((item) => {
        const arr = [];
        if (item.preview !== undefined) {
          item.preview.forEach((arrItem) => {
            arr.push([
              arrItem.storyid,
              arrItem.type,
              arrItem.length,
              arrItem.src,
              arrItem.storypreview,
              arrItem.link,
              arrItem.linkText,
              arrItem.seen,
              timestamp(),
            ]);
          });
          storyArr.push(
            Zuck.buildTimelineItem(
              item.id,
              item.photo,
              item.name,
              item.link,
              timestamp(),
              arr
            )
          );
        }
      });
      new Zuck(ref, {
        stories: storyArr,
      });
    }
    return () => props;
  });

  return (
    <Fragment>
      <div
        id="stories"
        ref={(node) => (ref = node)}
        className="storiesWrapper d-flex justify-content-around"
      ></div>
    </Fragment>
  );
};

Stories.displayName = "Stories";
export default Stories;
