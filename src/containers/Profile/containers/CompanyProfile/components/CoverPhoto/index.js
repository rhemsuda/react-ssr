import React from 'react';
import coverPhoto from './images/coverphoto.png';

const CoverPhoto = () => {
  return <img src={coverPhoto}  style={{position: 'absolute', width: '100%', maxHeight: '400px', zIndex: -9999}}/>
}

export default CoverPhoto;