import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Poems } from '../poems'

const poems = [
  {
    "title": "12",
    "quote": "All her teeth are breaking\nAs he\npretends to read her palm",
    "journal": "Published by Pacifica Review",
    "link": "http://www.pacificareview.com/12/"
  },
  {
    "title": "Half-Fish Daughter",
    "quote": "At first frost I vacate the pond,\nhooks and barbs wedged in the shadows of my flesh.",
    "journal": "Published by Silver Birch Press",
    "link": "https://silverbirchpress.wordpress.com/2014/08/14/half-fish-daughter-poem-by-rosa-swartz-self-portrait-poetry-project/"
  },
  {
    "title": "[Two Poems]",
    "quote": "In autumn I moved gracelessly west—\nI began by throwing my dishes\noff the platform at 95th and Dan Ryan.",
    "journal": "Published by Carnival",
    "link": "http://www.carnivalitmag.com/wp-content/uploads/2014/06/magic.pdf"
  },
  {
    "title": "Quondam",
    "quote": "Quit it. Love quit.\nQuick as a month or minute: silent as a father, the snow...",
    "journal": "Published by Really System",
    "link": "http://reallysystem.org/issues/one/quondam/"
  },
  {
    "title": "Macabre",
    "quote": "I never tried harder than that\nto disgust you without even speaking—",
    "journal": "Published by Coal Hill Review",
    "link": "http://www.coalhillreview.com/macabre/"
  },
  {
    "title": "A-Frame",
    "quote": "An A-frame house is the letter inside,\na letter I read, a letter I write. It’s begun...",
    "journal": "Published by The Golden Key",
    "link": "http://www.whatwonderfulthings.net/main/a-frame-by-rose-swartz/"
  },
  {
    "title": "Inversion",
    "quote": "I was looking for you everywhere.\nIt was dawn here and dusk there.",
    "journal": "Published by The Golden Key",
    "link": "http://www.whatwonderfulthings.net/main/inversion-by-rose-swartz/"
  },
  {
    "title": "Kibosh",
    "quote": "Kibosh: this beautiful hat may fit you some day—its lining like the fields at year’s end, un\nkempt and deadly golden.",
    "journal": "Published by Devil's Lake",
    "link": "http://english.wisc.edu/devilslake/issues/spring2013/Swartz.html"
  },
  {
    "title": "Lab Report",
    "quote": "Being in love with the idea of being in love is a tired game.",
    "journal": "Published by The Kenyon Review",
    "link": "http://www.kenyonreview.org/kr-online-issue/2011-winter/selections/lab-report/"
  },
  {
    "title": "Storm Siren",
    "quote": "She ran out the screen door\na swirl of pine needles, pointed toes.",
    "journal": "Published by Front Porch Journal",
    "link": "http://www.frontporchjournal.com/issue70_poetry_swartz.asp"
  },
  {
    "title": "Hotel Vitava City",
    "quote": "West past the point of sleeplessness. Unnamed highway exit.\nA small town has been turned inside out...",
    "journal": "Published by Tattoo Highway",
    "link": "http://www.tattoohighway.org/16/rshotel.html"
  },
  {
    "title": "Road Deep Dream",
    "quote": "After so many decades Detroit still burns.\nA man in a disheveled coat stands on the overpass...",
    "journal": "Published by Tattoo Highway",
    "link": "http://www.tattoohighway.org/16/rsroad.html"
  }
];

const node = document.getElementById('poems-data');
const images = JSON.parse(node.getAttribute('data'));

ReactDOM.render(
  <Poems poems={poems} images={images}/>,
  document.getElementById('poems-data')
)
