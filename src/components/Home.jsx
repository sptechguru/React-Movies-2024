import React from "react";
import Common from "./common/Common";

const Home = () => {
  return (
    <div className="my-5">
      <Common
        name="Grow Your Bussiness "
        word=" Hello everyone I am Santosh Pal and I am React developer designs and implements user-facing features for websites and applications using React. js. They are known as front-end developers, a sub-group of developers that manage everything that users see on their web browsers or applications. "
        imgsrc={'https://www.appletechsoft.com/wp-content/uploads/2021/11/React-JS-Development-Project.png'}
        visit="/about"
        btname="Get Started"
      />
    </div>
  );
};

export default Home;
