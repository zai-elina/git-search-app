import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import AboutUserPage from "../pages/aboutUserPage/AboutUserPage";
import { NotFoundPage } from "../pages/notFoundPage/NotFoundPage";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/users/:login" element={<AboutUserPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
