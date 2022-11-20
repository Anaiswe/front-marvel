import React from "react";

const Home = ({ isLoading }) => {
  return isLoading ? (
    <div className="loading">Loading....</div>
  ) : (
    <div className="home-container">Welcome you Marvel-ous- visitor!</div>
  );
};
export default Home;
