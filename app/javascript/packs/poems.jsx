import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Poems } from '../poems'

const posts = {
  "posts": {
    "data": [
      {
        "type": "photo",
        "link": "https://www.facebook.com/1629214687363894/photos/a.1631230880495608/1979654858986540/?type=3",
        "id": "1629214687363894_1979654922319867"
      },
      {
        "type": "photo",
        "link": "https://www.facebook.com/1629214687363894/photos/a.1720692104882818/1727595790859116/?type=3",
        "id": "1629214687363894_1727595790859116"
      },
      {
        "type": "photo",
        "link": "https://www.facebook.com/1629214687363894/photos/a.1720692104882818/1720692211549474/?type=3",
        "id": "1629214687363894_1720692211549474"
      },
      {
        "type": "event",
        "link": "https://www.facebook.com/events/605122596308050/",
        "id": "1629214687363894_605122596308050"
      },
      {
        "type": "event",
        "link": "https://www.facebook.com/events/1480571912246645/",
        "id": "1629214687363894_1480571912246645"
      },
      {
        "type": "photo",
        "link": "https://www.facebook.com/1629214687363894/photos/a.1631230713828958/1632250240393672/?type=3",
        "id": "1629214687363894_1632250240393672"
      },
      {
        "type": "photo",
        "link": "https://www.facebook.com/1629214687363894/photos/a.1631230713828958/1632250123727017/?type=3",
        "id": "1629214687363894_1632250160393680"
      },
      {
        "type": "link",
        "message": "12 | All her teeth are breaking / As he / pretends to read her palm | Published by Pacifica Review | http://www.pacificareview.com/12/",
        "link": "http://www.pacificareview.com/12/",
        "id": "1629214687363894_1631230230495673"
      },
      {
        "type": "link",
        "message": "Half-Fish Daughter | At first frost I vacate the pond, / hooks and barbs wedged in the shadows of my flesh. | Published by Silver Birch Press | https://silverbirchpress.wordpress.com/2014/08/14/half-fish-daughter-poem-by-rosa-swartz-self-portrait-poetry-project/",
        "link": "https://silverbirchpress.wordpress.com/2014/08/14/half-fish-daughter-poem-by-rosa-swartz-self-portrait-poetry-project/",
        "id": "1629214687363894_1631229537162409"
      },
      {
        "type": "link",
        "message": "[Two Poems] | In autumn I moved gracelessly west— / I began by throwing my dishes / off the platform at 95th and Dan Ryan. | Published by Carnival | http://www.carnivalitmag.com/wp-content/uploads/2014/06/magic.pdf",
        "link": "http://www.carnivalitmag.com/wp-content/uploads/2014/06/magic.pdf",
        "id": "1629214687363894_1631229143829115"
      },
      {
        "type": "link",
        "message": "Quondam | Quit it. Love quit. / Quick as a month or minute: silent as a father, the snow... | Published by Really System | http://reallysystem.org/issues/one/quondam/",
        "link": "http://reallysystem.org/issues/one/quondam/",
        "id": "1629214687363894_1631228403829189"
      },
      {
        "type": "link",
        "message": "Macabre | I never tried harder than that / to disgust you without even speaking— | Published by Coal Hill Review | http://www.coalhillreview.com/macabre/",
        "link": "http://www.coalhillreview.com/macabre/",
        "id": "1629214687363894_1631228143829215"
      },
      {
        "type": "link",
        "message": "A-Frame | An A-frame house is the letter inside, / a letter I read, a letter I write. It’s begun... | Published by The Golden Key | http://www.whatwonderfulthings.net/main/a-frame-by-rose-swartz/",
        "link": "http://www.whatwonderfulthings.net/main/a-frame-by-rose-swartz/",
        "id": "1629214687363894_1631227687162594"
      },
      {
        "type": "link",
        "message": "Inversion | I was looking for you everywhere. / It was dawn here and dusk there. | Published by The Golden Key | http://www.whatwonderfulthings.net/main/inversion-by-rose-swartz/",
        "link": "http://www.whatwonderfulthings.net/main/inversion-by-rose-swartz/",
        "id": "1629214687363894_1631227527162610"
      },
      {
        "type": "link",
        "message": "Kibosh | Kibosh: this beautiful hat may fit you some day—its lining like the fields at year’s end, un / kempt and deadly golden. | Published by Devil's Lake | http://english.wisc.edu/devilslake/issues/spring2013/Swartz.html",
        "link": "http://english.wisc.edu/devilslake/issues/spring2013/Swartz.html",
        "id": "1629214687363894_1631227163829313"
      },
      {
        "type": "link",
        "message": "Lab Report | Being in love with the idea of being in love is a tired game. | Published by The Kenyon Review | http://www.kenyonreview.org/kr-online-issue/2011-winter/selections/lab-report/",
        "link": "http://www.kenyonreview.org/kr-online-issue/2011-winter/selections/lab-report/",
        "id": "1629214687363894_1631226607162702"
      },
      {
        "type": "link",
        "message": "Storm Siren | She ran out the screen door / a swirl of pine needles, pointed toes. | Published by Front Porch Journal | http://www.frontporchjournal.com/issue70_poetry_swartz.asp",
        "link": "http://www.frontporchjournal.com/issue70_poetry_swartz.asp",
        "id": "1629214687363894_1631225737162789"
      },
      {
        "type": "link",
        "message": "Hotel Vitava City | West past the point of sleeplessness. Unnamed highway exit. / A small town has been turned inside out... | Published by Tattoo Highway | http://www.tattoohighway.org/16/rshotel.html",
        "link": "http://www.tattoohighway.org/16/rshotel.html",
        "id": "1629214687363894_1631224180496278"
      },
      {
        "type": "link",
        "message": "Road Deep Dream | After so many decades Detroit still burns. / A man in a disheveled coat stands on the overpass... | Published by Tattoo Highway | http://www.tattoohighway.org/16/rsroad.html",
        "link": "http://www.tattoohighway.org/16/rsroad.html",
        "id": "1629214687363894_1631223920496304"
      },
      {
        "type": "event",
        "link": "https://www.facebook.com/events/1608814566048385/",
        "id": "1629214687363894_1608814566048385"
      }
    ],
    "paging": {
      "cursors": {
        "before": "Q2c4U1pXNTBYM0YxWlhKNVgzTjBiM0o1WDJsa0R5UXhOakk1TWpFME5qZAzNNell6T0RrME9pMDVNRGs1T1RjM056TTRNalF6TVRjek5qUVBER0ZA3YVY5emRHOXllVjlwWkE4aE1UWXlPVEl4TkRZANE56TTJNemc1TkY4eE9UYzVOalUwT1RJeU16RTVPRFkzRHdSMGFXMWxCbG1ySXUwQgZDZD",
        "after": "Q2c4U1pXNTBYM0YxWlhKNVgzTjBiM0o1WDJsa0R5UXhOakk1TWpFME5qZAzNNell6T0RrME9qWTNOelF4TVRBeU9EQXdNVGsxTVRreU1qRVBER0ZA3YVY5emRHOXllVjlwWkE4aE1UWXlPVEl4TkRZANE56TTJNemc1TkY4eE5qQTRPREUwTlRZAMk1EUTRNemcxRHdSMGFXMWxCbFhlU1ZArQgZDZD"
      }
    }
  },
  "id": "1629214687363894"
};

const poems = posts.posts.data
  .filter(post => post.type === "link")
  .map(poem => {
    const doc = poem.message.split("|").map(info => info.trim());
    return {
      title: doc[0],
      quote: doc[1].replace(/\s\/\s/g, "\n"),
      journal: doc[2],
      link: doc[3]
    }
  });

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('poems-data');
  const images = JSON.parse(node.getAttribute('data'));
  ReactDOM.render(
    <Poems poems={poems} images={images}/>,
    document.getElementById('poems-data')
  )
})
