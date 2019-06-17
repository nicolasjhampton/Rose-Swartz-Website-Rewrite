import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Gallery } from './gallery'

const Portfolio = ({ portfolio }) => {

    const galleries = portfolio
        .map((gallery, index) => (
            <Gallery key={index + gallery.name} {...gallery} />
        ));

    return (
    <div className="portfolio">
        {galleries}
    </div>
    );
}

Portfolio.defaultProps = {
    portfolio: []
}
Portfolio.propTypes = {
    portfolio: PropTypes.array
}

export { Portfolio };