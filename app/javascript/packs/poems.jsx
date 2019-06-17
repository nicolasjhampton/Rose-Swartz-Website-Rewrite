import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Poems } from '../poems'


const node = document.getElementById('poems-data');
const { images, poems } = JSON.parse(node.getAttribute('data'));

ReactDOM.render(
  <Poems poems={poems} images={images}/>,
  document.getElementById('poems-data')
)
