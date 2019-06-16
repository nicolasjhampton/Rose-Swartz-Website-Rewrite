import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Portfolio = (props) => {

    const portfolio = props.portfolio;

    return (
        <div className="portfolio">
            {portfolio.map((gallery, index) => {
                return (
                    <div className="gallery">
                        <h3>{gallery.name}</h3>
                        <div className="photos">
                            {gallery.photos.map((image, imgIndex) => {
                                return (
                                    <div key={imgIndex + image.source} className="photo">
                                        <img src={image.source} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

// About.defaultProps = {
//     name: 'David'
// }
// About.propTypes = {
//     name: PropTypes.string
// }

export { Portfolio };