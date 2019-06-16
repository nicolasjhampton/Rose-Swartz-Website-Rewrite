import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Poems = (props) => {

    return (
    <div className="centering">
        {props.poems.map((poem, index) => {
            return (
            <div key={`${index}:${poem.title}`} className="poem">
                <p className="poemText">
                    <b>{poem.title}</b>
                    <a href={poem.link}>
                        <img src={props.images.key} width="50px" />
                    </a>
                    <pre>{poem.quote}</pre>
                    <small>
                        <b>Published by {poem.journal}</b>
                    </small>
                </p>
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

export { Poems };