import React from "react";
import { Routes, Route } from "react-router-dom";

import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Questions from "./pages/Questions/Questions";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./pages/Questions/DisplayQuestion";
import Tags from "./pages/Tags/Tags";
import Users from "./pages/Users/Users";
import Userprofile from "./pages/UserProfile/Userprofile";

function AllRoutes({ slideIn, handleSlideIn }) {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home slideIn={slideIn} handleSlideIn={handleSlideIn} />}
        />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/questions"
          element={
            <Questions slideIn={slideIn} handleSlideIn={handleSlideIn} />
          }
        />
        <Route path="/askquestion" element={<AskQuestion />} />
        <Route
          path="questions/:id"
          element={
            <DisplayQuestion slideIn={slideIn} handleSlideIn={handleSlideIn} />
          }
        />
        <Route
          path="/tags"
          element={<Tags slideIn={slideIn} handleSlideIn={handleSlideIn} />}
        />
        <Route
          path="/users"
          element={<Users slideIn={slideIn} handleSlideIn={handleSlideIn} />}
        />
        <Route
          path="/users/:id"
          element={
            <Userprofile slideIn={slideIn} handleSlideIn={handleSlideIn} />
          }
        />
      </Routes>
    </div>
  );
}

export default AllRoutes;
