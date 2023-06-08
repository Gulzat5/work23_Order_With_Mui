import React, { useCallback, useState } from "react";
import { Header } from "../components/header/Header";

import { Outlet } from "react-router-dom";
import { Basket } from "../components/basket/Basket";

export const UserLyout = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return (
    <div>
      <Header toggleHandler={toggleHandler} />
      <Outlet />

      {toggle && <Basket toggleHandler={toggleHandler} />}
    </div>
  );
};
