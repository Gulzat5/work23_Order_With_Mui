import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignUp } from "../pages/SignUp";
import { UserLyout } from "../layout/UserLyout";
import { MealLayout } from "../layout/MealLayout";
import { Signinn } from "../pages/Signinn";
export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserLyout />}>
          <Route path="signin" element={<Signinn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route index element={<MealLayout />} />
        </Route>
      </Routes>
    </div>
  );
};
