import { GetServerSideProps, NextPage } from "next";
import { MainContainer } from "../../components/MainContainer";

const Cards: NextPage = () => {
  return (
    <MainContainer title={"Карты"}>
      <div className="container">
        <div className="mainTitle">
          <h1>Банковские карты</h1>
        </div>
      </div>
    </MainContainer>
  );
};

export default Cards;
