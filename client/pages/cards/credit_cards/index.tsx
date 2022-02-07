import * as React from "react";
import { GetServerSideProps, NextPage } from "next";
import Error from "next/error";
import Link from "next/link";

import { MainContainer } from "../../../components/MainContainer";
import { CardInterface } from "../../../components/TabList";
import classes from "../cards.module.scss";
import { useRouter } from "next/router";
import cn from "classnames";
import { CardIcon, cardsVariations } from "../../../static/constants";
import { ButtonPrimary } from "../../../components/Buttons/button-primary";
import { ButtonOutline } from "../../../components/Buttons/button-outline";

const Cards: NextPage<{ cards: CardInterface[]; statusCode: number }> = ({
  cards,
  statusCode,
}) => {
  const router = useRouter();
  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <MainContainer title={"Кредитные карты"}>
      <div className="container">
        <div className="mainTitle">
          <h1>Банковские карты</h1>
        </div>
        <div className={classes.topCardsBar}>
          <div className={classes.cardsVariations}>
            {cardsVariations.map((el) => {
              return (
                <Link key={el.href} href={el.href}>
                  <a
                    className={cn(
                      classes.cardVariation,
                      router.pathname.includes(el.href) &&
                        classes.activeVariation
                    )}
                  >
                    {el.name}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
        <div className={classes.cardWrapper}>
          {cards.map((el: CardInterface) => {
            const cardInfo = [
              {
                name: "кредитный лимит",
                value: el.credit_limit,
                currency: "Р",
              },
              {
                name: "процентная ставка",
                value: el.interest_rate,
                currency: "%",
              },
              {
                name: "Беспроцентный период",
                value: el.free_period,
                currency: "дней",
              },
            ];
            return (
              <div key={el.id} className={classes.card}>
                <div className={classes.cardNameWrapper}>
                  <div className={classes.cardName}>{el.name}</div>
                  <CardIcon />
                </div>
                <div className={classes.cardInfoWrapper}>
                  <div className={classes.cardImage}></div>
                  <div className={classes.cardAllInfo}>
                    {cardInfo.map((el) => {
                      if (el.value && el.value !== "null") {
                        return (
                          <div className={classes.cardInfo} key={el.name}>
                            <div className={classes.infoValue}>
                              {el.value} {el.currency}
                            </div>
                            <div className={classes.infoName}>{el.name}</div>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
                <div className={classes.cardButtons}>
                  <ButtonPrimary text={"Оформить"} />
                  <ButtonOutline text={"В сравнение"} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MainContainer>
  );
};

export default Cards;

export async function getServerSideProps(context: GetServerSideProps) {
  try {
    const res = await fetch("http://localhost:3000/api/v1/credit_cards");
    const cards = await res.json();
    return {
      props: { cards, statusCode: 200 },
    };
  } catch (error) {
    return { cards: null, statusCode: 503 };
  }
}
