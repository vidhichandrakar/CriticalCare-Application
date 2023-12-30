import React from "react";
import AllCourses from "../AllCoursesService/AllCourses";
import YourPurchasedCourses from "../AllCoursesService/YourPurchasedCourses";

function Home() {
  return (
    <main className="main-container">
    {/* <AllCourses /> */}
    <YourPurchasedCourses />
    </main>
  );
}

export default Home;
