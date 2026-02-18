import React from "react";
import { fetchphoto } from "./api/mediaApi";

const App = () => {
  return (
    <div>
      <button
        onClick={() => {
          fetchphoto("dog");
        }}
      >
        Get Photos
      </button>
    </div>
  );
};

export default App;
