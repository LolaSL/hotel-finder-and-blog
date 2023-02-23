import React from "react";
import Slide from "../components/Slide";
import { Helmet } from 'react-helmet-async';
import NewsLetter from "../components/NewsLetter";
import video from '../components/videos/1.mp4';
import Container from "react-bootstrap/Container";



const JourneyOfAllExperiences = () => {

  return (
    <div>
        <Helmet>
        <title>Journey Of All Experiences</title>
      </Helmet>
      <Container>
        {/* <div className="video"> */}
        <div class="penci-ctslide-bg" data-jarallax="" data-video-src="https://www.youtube.com/embed/qBksp9FS3Sc?autoplay=1&amp;controls=0&amp;modestbranding=1&amp;loop=1&amp;mute=1&amp;enablejsapi=1&amp;origin=https://theworldtravelguy.com&amp;widgetid=1"><div id="jarallax-container-0" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; z-index: -100;"><div style="background-position: 50% 50%; background-size: cover; background-repeat: no-repeat; background-image: none; position: absolute; top: 0px; left: 0px; width: 1519.2px; height: 727px; overflow: hidden; pointer-events: none; transform-style: preserve-3d; backface-visibility: hidden; will-change: transform, opacity; margin-top: 13.5px; transform: translate3d(0px, -54.5px, 0px); display: none;"></div><iframe id="VideoWorker-0" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="The World Travel Guy - Website Background" width="640" height="360" src="https://www.youtube.com/embed/qBksp9FS3Sc?autohide=1&amp;rel=0&amp;autoplay=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;controls=0&amp;showinfo=0&amp;disablekb=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Ftheworldtravelguy.com&amp;widgetid=1" style="position: absolute; inset: 0px; width: 1738.4px; height: 1377.85px; max-width: none; max-height: none; margin: -403.925px 0px 0px; z-index: -1; transform: translate3d(0px, -8.5px, 0px);"></iframe></div>
      {/* <video src={video} width="480" height="350" controls autoplay="true"> */}
     {/* </video> */}
      {/* </div> */}
      <h1 className="font-weight-light display-1 text-center mb-4 mt-4">
        Journey Of All Experiences
      </h1>
      <h2 className="font-weight-light display-6 text-center">
        Find inspiration for your next adventure, whether trekking through the
        jungle with an elephant or traversing the largest sand desert in the
        world. Let your imagination run wild.
      </h2>
      <section>
        <div>
          <img
            src="./images/18.jpg"
            alt="Destination"
            className="img-thumbnail image rounded mx-auto d-block shadow"
          />
        </div>
   
        <article className="article mt-4 mb-4">
          Sprinkle a dash of novelty on your festivities and embrace the
          opportunity to celebrate more than just the holiday season this year.
        </article>
           <Slide />
        <article className="article mt-4 mb-4">
          In our fast-paced world there is no greater gift than the memories
          that you create, and the places that you create them. Take the time to
          indulge in unique customs, inspiring cuisine and breathtaking scenery.
          Embark on a magical journey as you reconnect with loved ones in the
           most storied destinations this holiday season.   Find out the places that matter.
        </article>
      </section>
      <section>
        <div>
          <img
            src="./images/17.jpg"
            alt="Tourist tips"
            className="img-thumbnail image rounded mx-auto d-block shadow"
          />
        </div>
        <article className="article">
          Are you thinking about taking some time off and organizing a lovely
          trip somewhere you have never been before? If so you will see that
          there will be many things that you have to take in consideration when
          doing so. Surely what you want is to organize the perfect trip:
          somewhere amazing and for a good price. The secret is to be strategic
          and think about each and every detail carefully. Here we give you 15
          tricks for you to choose the perfect hotel. We can assure you that by
          following these tips you will find the perfect accommodation and save
          some extra money.
        </article>
      </section>
        <NewsLetter />
      </Container>
    </div>

  );
};

export default JourneyOfAllExperiences;
