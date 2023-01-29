import React from 'react';
import { Link, useLocation } from "react-router-dom";


const JourneyOfAllExperiences = () => {

  const { search } = useLocation();

  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  return (
    <div>
      <h1 className="font-weight-light display-1 text-center mb-4 mt-4">
        Journey Of All Experiences
      </h1>
      <h2 className="font-weight-light display-6 text-center">
        Find inspiration for your next adventure, whether trekking through the
        jungle with an elephant or traversing the largest sand desert in the
        world. Let your imagination run wild.
      </h2>
      <article className="article mt-4 mb-4">
        Sprinkle a dash of novelty on your festivities and embrace the opportunity to celebrate more than just the holiday season this year. In our fast-paced world there is no greater gift than the memories that you create, and the places that you create them. Take the time to indulge in unique customs, inspiring cuisine and breathtaking scenery. Embark on a magical journey as you reconnect with loved ones in Europes most storied destinations this holiday season. 
        <Link className='link font-weight-light' to={`/blog?redirect=${redirect}`}> Find your new adventure trip and de</Link>

</article>
      <article className="article">Are you thinking about taking some time off and organizing a lovely trip somewhere you have never been before? If so you will see that there will be many things that you have to take in consideration when doing so. Surely what you want is to organize the perfect trip: somewhere amazing and for a good price. The secret is to be strategic and think about each and every detail carefully. Here we give you 15 tricks for you to choose the perfect hotel. We can assure you that by following these tips you will find the perfect accommodation and save some extra money.
      <Link className='link font-weight-light' to={`/tips?redirect=${redirect}`}> The best tourist tips for your unforgettable trip.</Link>

      </article>
    </div>
  );
};

export default JourneyOfAllExperiences;
