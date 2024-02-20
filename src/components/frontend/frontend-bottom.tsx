import { useEffect, useState, useRef } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "./frontend.css";
import SinNombreVideo from "./Assets/Sin Nombre.mp4";
import TodoListVideo from "./Assets/Todo List.mp4";
import WeatherAppVideo from "./Assets/Weather App.mp4";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FrontendBottom() {
  const [slideIndex, setSlideIndex] = useState(1);
  const slidesRef = useRef<HTMLCollectionOf<Element> | null>(null);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    const slides = document.getElementsByClassName("slides");
    slidesRef.current = slides;
    showSlides(slideIndex);
  }, [slideIndex]);

  function plusSlides(n: number): void {
    let newIndex = slideIndex + n;
    if (slidesRef.current && slidesRef.current.length) {
      if (newIndex > slidesRef.current.length) {
        newIndex = 1;
      } else if (newIndex < 1) {
        newIndex = slidesRef.current.length;
      }
      setSlideIndex(newIndex);
    }
  }

  function currentSlide(n: number): void {
    setSlideIndex(n);
  }

  function showSlides(n: number): void {
    const slides = slidesRef.current;
    const dots = document.getElementsByClassName("dot");
    if (slides && slides.length) {
      if (n > slides.length) {
        setSlideIndex(1);
      } else if (n < 1) {
        setSlideIndex(slides.length);
      }
      for (let i = 0; i < slides.length; i++) {
        (slides[i] as HTMLElement).style.display = "none";
      }
      for (let i = 0; i < dots.length; i++) {
        (dots[i] as HTMLElement).className = (
          dots[i] as HTMLElement
        ).className.replace(" active", "");
      }
      (slides[slideIndex - 1] as HTMLElement).style.display = "block";
      (dots[slideIndex - 1] as HTMLElement).className += " active";
    }
  }

  return (
    <div className="frontend-bottom-container" ref={ref}>
      <div className="slides fade">
        <a href="https://github.com/ArranStrange/weather-api-app">
          <video
            src={WeatherAppVideo}
            autoPlay
            muted
            className="frontend-video"
          />
        </a>
        <div className="text">
          Weather App using HTML, CSS, Typescript & React
        </div>
      </div>

      <div className="slides fade">
        <a href="https://github.com/ArranStrange/todo-list">
          <video
            src={TodoListVideo}
            autoPlay
            muted
            className="frontend-video"
          />
        </a>
        <div className="text">
          Todo List App using HTML, CSS, Typescript & React
        </div>
      </div>

      <div className="slides fade">
        <a href="https://github.com/ArranStrange/todo-list">
          <video
            src={SinNombreVideo}
            autoPlay
            muted
            className="frontend-video"
          />
        </a>
        <div className="text">
          Static Site using React, Typescript & TailwindCSS
        </div>
      </div>

      <div className="next-prev-arrows">
        <motion.a
          initial={{ x: "-100vh", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -1000 }}
          transition={{ delay: 0.2, duration: 1, type: "tween" }}
          className="prev"
          onClick={() => plusSlides(-1)}
        >
          <FaArrowCircleLeft
            style={{
              height: "40px",
              width: "40px",
              color: "#141213",
              opacity: 0.9,
            }}
          />
        </motion.a>
        <motion.a
          initial={{ x: "100vh", opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: 1000 }}
          transition={{ delay: 0.2, duration: 1, type: "tween" }}
          className="next"
          onClick={() => plusSlides(1)}
        >
          {" "}
          <FaArrowCircleRight
            style={{
              height: "40px",
              width: "40px",
              color: "#141213",
              opacity: 0.9,
            }}
          />
        </motion.a>
      </div>

      <div>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
}
