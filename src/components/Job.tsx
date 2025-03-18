import { NavLink } from "@/components/Nav";
import React from "react";

export default function Job({ ...props }) {
  return (
    <div className="job-container flex  hover:shadow-[5px_5px_1px_0px_rgba(0,_0,_0,_0.5)] rounded-lg cursor-pointer px-8 py-4 justify-between ">
      <div className="job-info flex flex-col justify-between">
        <div className="position">
          <h4>
            <NavLink href={`/emprego/${props.id}`}>{props.position}</NavLink>
          </h4>
        </div>
        <div className="company">
          <h3>{props.company}</h3>
        </div>
        <div className="job-footer flex justify-between">
          <div className="location">
            <p>{props.location}</p>
          </div>
          <div className="salary">{/* <p>{props.salary}</p> */}</div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between">
        <div>new</div>
        <div>
          <p>{props.expireDate || props.addedAt}</p>
        </div>
      </div>
    </div>
  );
}
