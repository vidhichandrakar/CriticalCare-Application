import React from "react";
import AllCourses from "../AllCoursesService/AllCourses";
import YourPurchasedCourses from "../AllCoursesService/YourPurchasedCourses";
import Explore from "../AllCoursesService/Explore";
import JoinNow from "../AllCoursesService/JoinNow";

function Home() {
  return (
    <main className="main-container">
    {/* <AllCourses /> */}
    {/* <YourPurchasedCourses /> */}
    {/* <Explore/> */}
    <JoinNow/>
    </main>
  );
}

export default Home;
