import React from "react";

export default function VagaForm() {
  return (
    <form className="p-4 flex flex-col gap-y-4 w-4/6 ">
      <div>
        <label htmlFor="company">Company</label>
        <input type="text" name="company" />
      </div>
      <div>
        <label htmlFor="logo">Logo</label>
        <input type="text" name="logo" />
      </div>
      <div>
        <label htmlFor="title">Job Title</label>
        <input type="text" name="title" />
      </div>
      <div>
        <label htmlFor="description">Job Description</label>
        <input type="text" name="description" />
      </div>
      <div>
        <label htmlFor="jobUrl">Link to the job</label>
        <input type="text" name="jobUrl" />
      </div>
      <div>
        <label htmlFor="contract">Type of Contract</label>
        <input type="text" name="contract" />
      </div>
      <div>
        <label htmlFor="contract">Type of Contract</label>
        <input type="text" name="contract" />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input type="text" name="location" />
      </div>
      <div>
        <label htmlFor="salary">Salary</label>
        <input type="text" name="salary" />
      </div>
      <input type="submit" name="submit" id="submit" />
    </form>
  );
}
