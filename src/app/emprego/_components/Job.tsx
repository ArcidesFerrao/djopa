import React from "react";

export default function Job() {
  return (
    <div className="job-container flex w-4/6 hover:shadow-[5px_5px_1px_0px_rgba(0,_0,_0,_0.5)] rounded-lg cursor-pointer px-8 py-4  ">
      <div className="job-info flex flex-col gap-y-1">
        <div className="position">
          <h4>Frontend Developer</h4>
        </div>
        <div className="company">
          <h3>DevHub</h3>
        </div>
        <div className="job-footer flex justify-between">
          <div className="location">
            <p>Maputo</p>
          </div>
          <div className="salary">
            <p>$200,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
