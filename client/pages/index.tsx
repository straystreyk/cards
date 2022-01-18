import type { NextPage, GetStaticProps } from "next";
import Image from "next/image";
import cn from "classnames";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { MainContainer } from "../components/MainContainer";
import { MainSlide, mainSlider } from "../static/constants";
import { imageLoader } from "../plugins/loaderImagesNext";
import { meta } from "../static/meta_information/main-page";

import "swiper/css";
import "swiper/css/pagination";

import classes from "../styles/pages/main-page.module.scss";

const MainPage: NextPage = (props: any) => {
  console.log(props);
  return (
    <MainContainer {...meta}>
      <Swiper
        className={classes.swiperOnMain}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          bulletClass: cn(
            "swiper-pagination-bullet",
            classes.swiperBulletOnMain
          ),
          bulletActiveClass: cn(
            "swiper-pagination-bullet-active",
            classes.swiperOnMainActive
          ),
        }}
      >
        {mainSlider.map(({ name, src }: MainSlide) => {
          return (
            <SwiperSlide key={src}>
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
