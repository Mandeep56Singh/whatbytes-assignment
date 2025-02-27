import React from "react";
import { Separator } from "./ui/separator";
import UpdateCourse from "./UpdateCourse";

const data = {
  questions: 8,
  duration: 15,
  date: "5 June 2021",
};

const Course = () => {
  return (
    <section className="flex flex-col sm:flex-row  gap-4 items-center  sm:items-start justify-between">
      {/* Logo */}
      <img src="/html.svg" alt="logo" className="size-10" />

      {/* Course Info */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <h1 className="text-lg font-medium whitespace-nowrap my-2 sm:my-0">
          HyperText Markup Language
        </h1>

        {/* Details Section */}
        <div className="flex flex-row items-center gap-2 text-sm">
          <div className="sm:flex">
            <div>Questions:</div>
            <div>{data.questions}</div>
          </div>

          <Separator orientation="vertical" className="sm:h-4 h-8" />

          <div className="sm:flex">
            <div>Duration:</div>
            <div>{data.duration} mins</div>
          </div>

          <Separator orientation="vertical" className="sm:h-4 h-8" />

          <div className="sm:flex">
            <div>Submitted on:</div>
            <div>{data.date}</div>
          </div>
        </div>
      </div>

      {/* Update Button */}
      <UpdateCourse />
    </section>
  );
};

export default Course;
