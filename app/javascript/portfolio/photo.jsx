import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Photo = ({ source }) => {
    return (
    <div className="photo">
        <img src={source} />
    </div>
    );
}

Photo.defaultProps = {
    source: "https://www.fillmurray.com/200/200"
}

Photo.propTypes = {
    source: PropTypes.string
}

export { Photo };