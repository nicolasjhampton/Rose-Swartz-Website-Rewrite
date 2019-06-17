import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { App } from '../portfolio'
import portfolio from '../mock_data/portfolio'


const node = document.getElementById('portfolio-data');
// const images = JSON.parse(node.getAttribute('data'));

ReactDOM.render(
  <App portfolio={portfolio} />,
  document.getElementById('portfolio-data')
)