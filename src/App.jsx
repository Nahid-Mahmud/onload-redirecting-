import { Fragment, useEffect } from "react";

import "./App.css";

function App() {
  useEffect(() => {
    window.location.href = "https://kahfguard.com/";
  }, []);
  return (
    <Fragment>
      <span className="loader"></span>{" "}
      <p>
        Redirecting to{" "}
        <span
          style={{
            color: "blue",
          }}
        >
          https://kahfguard.com/
        </span>{" "}
      </p>
    </Fragment>
  );
}

export default App;
