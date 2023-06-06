import React, { useEffect } from "react";
import styled from "styled-components";
import { Card } from "../UI/card/Card";
import { MealItem } from "./MealItem";
import { useDispatch, useSelector } from "react-redux";
import { Snagbar } from "../UI/Snagbar";
import { snakbarAction } from "../../store/snackbar";
import { getFoods } from "../../store/meals/mealsThunk";

export const Meals = () => {
  const { meals } = useSelector((state) => state.meals);
  console.log(meals);
  const { open } = useSelector((state) => state.snackbar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoods());
  }, [dispatch]);

  const onclose = () => {
    dispatch(snakbarAction.closeSnackBar());
  };

  return (
    <Container>
      {open && <Snagbar close={onclose} />}
      <Card>
        {meals?.map((meal) => (
          <MealItem key={meal._id} meal={meal} />
        ))}
      </Card>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 135px;
  margin-bottom: 100px;
`;
