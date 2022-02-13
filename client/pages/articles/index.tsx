import { NextPage } from "next";
import { MainContainer } from "../../components/MainContainer";

import classes from "./articles.module.scss";

const Articles: NextPage = () => {
  return (
    <MainContainer title={"Статьи"}>
      <div className="articlePage">
        <div className="container">
          <div className="mainTitle">
            <h1>Статьи</h1>
          </div>
          <div className={classes.articlesWrapper}>
            <div className={classes.articleItem}>
              <img className={classes.articleItemImage} />
              <div className={classes.articleItemContent}>
                <div className={classes.articleItemTag}>Карты</div>
                <div className={classes.articleItemName}>
                  Виды банковских карт и их особенности
                </div>
                <div className={classes.articleItemDescription}>
                  Банковская карта — это платежный инструмент, позволяющий
                  оплачивать покупки в онлайн и офлайн магазинах…Банковская
                  карта — это платежный инструмент, позволяющий оплачивать
                  покупки в онлайн и офлайн магазинах…Банковская карта — это
                  платежный инструмент, позволяющий оплачивать покупки в онлайн
                  и офлайн магазинах…Банковская карта — это платежный
                  инструмент, позволяющий оплачивать покупки в онлайн и офлайн
                  магазинах…Банковская карта — это платежный инструмент,
                  позволяющий оплачивать покупки в онлайн и офлайн
                  магазинах…Банковская карта — это платежный инструмент,
                  позволяющий оплачивать покупки в онлайн и офлайн магазинах…
                </div>
                <div className={classes.articleItemDatePost}>12.01.2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default Articles;
