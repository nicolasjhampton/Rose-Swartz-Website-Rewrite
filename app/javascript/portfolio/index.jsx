import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Portfolio } from './portfolio'

const App = (props) => {

    return (
    <React.Fragment>
        <Portfolio {...props} />
    </React.Fragment>
    );
}

App.defaultProps = {
    portfolio: []
}
App.propTypes = {
    portfolio: PropTypes.array
}

export { App };