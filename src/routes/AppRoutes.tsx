import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};

export default AppRoutes;
