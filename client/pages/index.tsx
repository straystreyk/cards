import type { NextPage } from "next";
import Image from "next/image";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { MainContainer } from "../components/MainContainer";
import { MainSlide, mainSlider } from "../static/constants";
import { imageLoader } from "../plugins/loaderImagesNext";

import "swiper/css";
import "swiper/css/pagination";

import classes from "../styles/pages/main-page.module.scss";

const MainPage: NextPage = () => {
  return (
    <MainContainer title={"Главная страница"}>
      <Swiper
          className={classes.swiperOnMain}
          modules={[Pagination]}
          pagination={{ clickable: true }}
      >
        {mainSlider.map(({ name, src }: MainSlide) => {
          return (
            <SwiperSlide
              key={src}
            >
              <Image
                src={src}
                loader={imageLoader}
                alt={name}
                layout="fill"
                objectFit="cover"
                priority
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </MainContainer>
  );
};

export default MainPage;
