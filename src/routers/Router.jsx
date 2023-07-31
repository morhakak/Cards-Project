import React from "react";
import { Route, Routes } from "react-router-dom";
import CardsPage from "../cards/components/card/CardsPage";
import About from "../cards/pages/About";
import ErrorPage from "../cards/pages/ErrorPage";
import ROUTES from "./routeModel";
import FavCards from "../cards/pages/FavCards";
import MyCards from "../cards/pages/MyCards";
import SingUp from "../users/pages/SingUp";
import LogIn from "../users/pages/LogIn";

import Profile from "../users/pages/Profile";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import SandBox from "../sandbox/SandBox";
import FirstComponent from "../sandbox/components/FirstComponent";
import SecondComponent from "../sandbox/components/SecondComponent";
import LifeCycle from "../sandbox/components/LifeCycle";
import Country from "../sandbox/components/Country";
import Memoization from "../sandbox/components/Memoization";
import MyCounter from "../sandbox/components/MyCounter";
import MyForm from "../sandbox/components/MyForm";
import Countires from "../sandbox/components/Countires";
import GrandComponent from "../sandbox/context/GrandComponent";
import TestForm from "../forms/TestForm";
import EditCardPage from "../cards/pages/EditCardPage";
import CreateNewCard from "../cards/components/card/CreateNewCard";
import EditUser from "../users/pages/EditUser";
export default function Router() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.ROOT} element={<CardsPage />} />
        <Route path={ROUTES.CARDS} element={<CardsPage />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.FAV_CARDS} element={<FavCards />} />
        <Route path={ROUTES.MY_CARDS} element={<MyCards />} />
        <Route path={ROUTES.SIGNUP} element={<SingUp />} />
        <Route path={ROUTES.LOGIN} element={<LogIn />} />
        <Route path={ROUTES.EDIT_USER} element={<EditUser />} />
        <Route path={`${ROUTES.EDIT_CARD}/:id`} element={<EditCardPage />} />
        <Route path={`${ROUTES.CREATE_CARD}`} element={<CreateNewCard />} />
        <Route path={ROUTES.USER_PROFILE} element={<Profile />} />
        <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailsPage />} />
        <Route path={ROUTES.SANDBOX} element={<SandBox />}>
          <Route path="first" element={<FirstComponent />} />
          <Route path="second" element={<SecondComponent />} />
          <Route path="life-cycle" element={<LifeCycle />} />
          <Route path="country" element={<Country />} />
          <Route path="memo" element={<Memoization />} />
          <Route path="counter" element={<MyCounter />} />
          <Route path="myform" element={<MyForm />} />
          <Route path="country" element={<Countires />} />
          <Route path="grand" element={<GrandComponent />} />
          <Route path="form" element={<TestForm />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
