import React from "react";
import AllCourses from "../AllCoursesService/AllCourses";
import YourPurchasedCourses from "../AllCoursesService/YourPurchasedCourses";
import Explore from "../AllCoursesService/Explore";

function Home() {
  return (
    <main className="main-container">
    {/* <AllCourses /> */}
    {/* <YourPurchasedCourses /> */}
    <Explore/>
    </main>
  );
}

export default Home;
