import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import DashboardMain from "../Components/DashboardMain";
import DashboardProfile from "../Components/DashboardProfile";
import { useNavigate } from "react-router-dom";

function Dashboard({ courses }) {
  const [userProfileCourses, setUserProfileCourses] = useState([]);
  const navigate = useNavigate();

  // Handle adding a course to the user profile
  const handleGetNow = (course) => {
    if (!userProfileCourses.find((c) => c.id === course.id)) {
      setUserProfileCourses((prevCourses) => [...prevCourses, course]);
    }
  };

  // Handle removing a course from the user profile
  const handleCancelCourse = (courseToRemove) => {
    setUserProfileCourses((prevCourses) =>
      prevCourses.filter((course) => course.id !== courseToRemove.id)
    );
  };

  // Handle navigation to a specific course page
  const handleViewCourse = (course) => {
    navigate(`/dashboard/course/${course.id}`);
  };

  return (
    <div className="relative m-0 gap-4 pl-5 bg-[#FBF8F6] overflow-hidden h-screen">
      {/* Large screens */}
      <div className="hidden md:flex flex-row justify-between">
        <div className="ml-[2px] mt-[39px]  ">
          {" "}
          <Sidebar />
        </div>
        <DashboardMain
          courses={courses}
          onGetNow={handleGetNow}
          onViewCourse={handleViewCourse}
        />
        <DashboardProfile
          userProfileCourses={userProfileCourses}
          onCancelCourse={handleCancelCourse}
          onViewCourse={handleViewCourse}
        />
      </div>

      {/* Small screens */}
      <div className="flex flex-col ss:flex md:hidden">
        <Sidebar />
        <DashboardProfile
          userProfileCourses={userProfileCourses}
          onCancelCourse={handleCancelCourse}
          onViewCourse={handleViewCourse}
        />
        <DashboardMain
          courses={courses}
          onGetNow={handleGetNow}
          onViewCourse={handleViewCourse}
        />
      </div>
    </div>
  );
}

export default Dashboard;
