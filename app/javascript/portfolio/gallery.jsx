import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Photo } from './photo'

const Gallery = ({ photos, name }) => {

    const images = photos
        .map((image, index) => (
            <Photo key={index + image.source} source={image.source} />
        ));

    return (
    <div className="gallery">
        <h3>{name}</h3>
        <div className="photos">
            {images}
        </div>
    </div>
    );
}

Gallery.defaultProps = {
    name: 'Gallery Name',
    photos: []
}

Gallery.propTypes = {
    photos: PropTypes.arrayOf(
        PropTypes.objectOf({ 
            source: PropTypes.string 
        })
    ).isRequired,
    name: PropTypes.string.isRequired
}

export { Gallery };