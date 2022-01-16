import type { NextPage } from "next";
import { MainContainer } from "../components/MainContainer";

const MainPage: NextPage = () => {
  return (
    <MainContainer title={"Главная страница"}>
      <div>hello world</div>
    </MainContainer>
  );
};

export default MainPage;
