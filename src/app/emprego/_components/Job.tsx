import React from "react";

export default function Job({ ...props }) {
  return (
    <div className="job-container flex w-4/6 hover:shadow-[5px_5px_1px_0px_rgba(0,_0,_0,_0.5)] rounded-lg cursor-pointer px-8 py-4 justify-between ">
      <div className="job-info flex flex-col gap-y-1">
        <div className="position">
          <h4>{props.position}</h4>
        </div>
        <div className="company">
          <h3>{props.company}</h3>
        </div>
        <div className="job-footer flex justify-between">
          <div className="location">
            <p>{props.location}</p>
          </div>
          <div className="salary">
            <p>{props.salary}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between">
        <div>new</div>
        <div>
          <p>12/12/2024</p>
        </div>
      </div>
    </div>
  );
}