import React, { useState } from 'react';

const DescriptionReadmore = () => {
  const [showMore, setShowMore] = useState(false);
  const description = "Welcome to my Rarible profile! I am an artist and digital creator with a passion for creating unique and visually stunning pieces. From vibrant digital paintings to one-of-a-kind 3D models, I strive to push the boundaries of what's possible in the digital medium. My work ranges from surreal landscapes and abstract designs to more traditional art styles, and I'm constantly experimenting with new techniques and technologies. Browse my collection of NFTs and add a piece of my digital art to your collection today!"
  const shortDescription = description.substring(0, 100) + '...'

  return (
    <div>
      { showMore ? <p>{description}</p> : <p>{shortDescription}</p> }
      <button onClick={() => setShowMore(!showMore)}>
        { showMore ? 'Show Less' : 'Show More' }
      </button>
    </div>
  );
}

export default DescriptionReadmore;
