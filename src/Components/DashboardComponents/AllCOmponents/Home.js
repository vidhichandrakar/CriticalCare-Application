import React from "react";
import AllCourses from "../AllCoursesService/AllCourses";
import YourPurchasedCourses from "../AllCoursesService/YourPurchasedCourses";
import BuyNow from "../AllCoursesService/BuyNow";

function Home() {
  return (
    <main className="main-container">
    <AllCourses />
    {/* <YourPurchasedCourses /> */}
    {/* <BuyNow /> */}
    </main>
  );
}

export default Home;
