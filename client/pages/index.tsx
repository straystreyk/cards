import type { NextPage } from "next";
// import Image from "next/image";
// import cn from "classnames";
// import { Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";

import { MainContainer } from "../components/MainContainer";
// import { MainSlide, mainSlider } from "../static/constants";
import { meta } from "../static/meta_information/main-page";
// import { imageLoader } from "../plugins/loader-images-next";
// import { TabList } from "../components/TabList";

import { CardInterface } from "../components/TabList";

import "swiper/css";
import "swiper/css/pagination";

// import classes from "../styles/pages/main-page.module.scss";

interface MainPageProps {
  cards?: CardInterface[];
}

const MainPage: NextPage<MainPageProps> = () => {
  return (
    <MainContainer {...meta}>
      {/*<Swiper*/}
      {/*  className={classes.swiperOnMain}*/}
      {/*  modules={[Pagination]}*/}
      {/*  loop={true}*/}
      {/*  pagination={{*/}
      {/*    clickable: true,*/}
      {/*    bulletClass: cn(*/}
      {/*      "swiper-pagination-bullet",*/}
      {/*      classes.swiperBulletOnMain*/}
      {/*    ),*/}
      {/*    bulletActiveClass: cn(*/}
      {/*      "swiper-pagination-bullet-active",*/}
      {/*      classes.swiperOnMainActive*/}
      {/*    ),*/}
      {/*  }}*/}
      {/*>*/}
      {/*  {mainSlider.map(({ name, src }: MainSlide) => {*/}
      {/*    return (*/}
      {/*      <SwiperSlide key={src}>*/}
      {/*        <Image*/}
      {/*          src={src}*/}
      {/*          loader={imageLoader}*/}
      {/*          alt={name}*/}
      {/*          layout="fill"*/}
      {/*          objectFit="cover"*/}
      {/*          priority*/}
      {/*        />*/}
      {/*      </SwiperSlide>*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</Swiper>*/}
      {/*<div className="container">*/}
      {/*  <TabList />*/}
      {/*</div>*/}
    </MainContainer>
  );
};

export default MainPage;
