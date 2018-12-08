import React from  'react';

const Card = ({ name, email, id }) => {
  
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'id="img-frame">
      <img alt="Robots" src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );

};

export default Card;

