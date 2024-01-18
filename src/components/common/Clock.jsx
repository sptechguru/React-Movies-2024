import React, { useState } from "react";

const Clock = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, seCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    seCtime(time);
  };

  setInterval(UpdateTime, 1000);

  return (
    <>
      <h4 className="text-right">
        <span className="outline outline-offset-1 outline-2 outline-red-800 text-white-800 text-1xl text-white font-semibold mt-2 px-2.5 py-2 rounded dark:bg-black-600 dark:text-white-300 mx-2 py-2 ">{ctime}</span>{" "}
      </h4>
    </>
  );
};

export default Clock;
