import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./style.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container">
      <h1 className="text-center">Full Stack Projects</h1>
        <h5 className="text-center">
          All projects display the use of several coding languages for
          example: NodeJS, JavaScript, HTML, CSS, React, SQL, MongoDB.
          Feel free to take a look at some of my projects and reach out with
          any questions. Click the buttons below to see the live demo and Repository!
        </h5>
    <br></br>
    <Carousel fade activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={"https://user-images.githubusercontent.com/74076318/108269765-189b4880-7134-11eb-91ab-f27e2afcc127.png"}
          alt="Password Generator"
        />
        <Carousel.Caption>
          <h3 className="text">Password Generator Demo</h3>
            <Button
              variant="success"
              href="https://mtjones1979.github.io/Password-Generator/"
              target="blank"
            >Github Pages
            </Button>
            <Button
              variant="success"
              href="https://github.com/mtjones1979/Password-Generator"
              target="blank"
            >Github Repository
            </Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={"https://user-images.githubusercontent.com/74076318/108271469-7761c180-7136-11eb-8855-2adbb3ba62ae.png"}
          alt="WorkDay Scheduler"
        />
        <Carousel.Caption>
          <h3 className="text">WorkDay Scheduler Demo</h3>
            <Button
              variant="success"
              href="https://mtjones1979.github.io/Work-Day-Scheduler/"
              target="blank"
            >Github Pages
            </Button>
            <Button
              variant="success"
              href="https://github.com/mtjones1979/Work-Day-Scheduler"
              target="blank"
            >Github Repository
            </Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={"https://user-images.githubusercontent.com/74076318/108271148-fd313d00-7135-11eb-8199-ccabf8a6eb56.png"}
          alt="Karaoke Time"
        />
        <Carousel.Caption>
          <h3 className="text1">Karaoke Time Demo</h3>
            <Button
              variant="success"
              href="https://5irrandom.github.io/Project-1/"
              target="blank"
            >Github Pages
            </Button>
            <Button
              variant="success"
              href="https://github.com/5irRandom/Project-1"
              target="blank"
            >Github Repository
            </Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
           className="d-block w-100"
          src={"https://user-images.githubusercontent.com/74076318/115748629-f30d0400-a35b-11eb-800a-481ae4d6ca4d.png"}
          alt="Note Taker"
        />
        <Carousel.Caption>
          <h3 className="text">Express.js Note Taker</h3>
            <Button
              variant="success"
              href="https://thawing-tor-44424.herokuapp.com/notes"
              target="blank"
            >Heroku Link
            </Button>
            <Button
              variant="success"
              href="https://github.com/mtjones1979/Express.js-Note-Taker"
              target="blank"
            >Github Repository
            </Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={"https://user-images.githubusercontent.com/74076318/116826461-b8744a00-ab59-11eb-8833-db3688df8180.png"}
          alt="Budget Tracker"
        />
        <Carousel.Caption>
          <h3 className="text">Budget Tracker</h3>
            <Button
              variant="success"
              href="https://floating-ravine-47961.herokuapp.com/"
              target="blank"
            >Heroku Link
            </Button>
            <Button
              variant="success"
              href="https://github.com/mtjones1979/Budget-Tracker"
              target="blank"
            >Github Repository
            </Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={"https://user-images.githubusercontent.com/74076318/114801086-a2484a80-9d60-11eb-93e4-719227a53b65.png"}
          alt="Git Jokes"
        />
        <Carousel.Caption>
          <h3 className="text">Git Jokes</h3>
            <Button
              variant="success"
              href="http://limitless-bayou-89275.herokuapp.com/"
              target="blank"
            >Heroku Link
            </Button>
            <Button
              variant="success"
              href="https://github.com/ashleyhayjin/projectTwo"
              target="blank"
            >Github Repository
            </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

</div>
  );
}

export default ControlledCarousel;