import React from "react";
import { fetchphoto, fetchvideo } from "./api/mediaApi";

const App = () => {
  return (
    <div>
      <button
        onClick={() => {
          fetchvideo("dog");
        }}
      >
        Get Photos
      </button>
    </div>
  );
};

export default App;
