import React from "react";

function CreateCourseMenu(course: {
  id: string;
  dishName: string;
  description: string;
}) {
  return (
    <div key={course.id} className="relative overflow-hidden pt-4">
      <div className="relative px-12 lg:px-16">
        <div className="max-w-prose text-lg">
          <h1>
            <span className="block text-left text-2xl font-bold leading-6 tracking-tight text-gray-900 sm:text-2xl">
              {course.id}
            </span>
          </h1>
          <p className="text-left text-lg leading-6">{course.dishName}</p>
          <p className="text-left text-lg leading-6">{course.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CreateCourseMenu;
