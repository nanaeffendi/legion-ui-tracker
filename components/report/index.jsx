import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
// import notebook from "d40c61bb9c87565a";
// import notebook from "fa932951ede1a176";
// import notebook from "05ab94bd828086d1";
import notebook from "80a93ab569acf736";



function Notebook() {
  const ref = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, Inspector.into(ref.current));
    return () => runtime.dispose();
  }, []);

  return (
    <div className="report-page--wrapper">
      <div ref={ref} />
      <p>Credit: <a href="https://observablehq.com/d/80a93ab569acf736">Legion-Site Component Tracker by nanaeffendi</a></p>
    </div>
  );
}

export default Notebook;
