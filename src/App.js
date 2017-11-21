import React, { Component } from 'react';
import './App.css';
import './flex-grid-lite.css'

const cards = [
  {img: './img/ajax-skatepark-th.jpg', title: 'Ajax'},
  {img: './img/aurora-skatepark-th.jpg', title: 'Aurora'},
  {img: './img/bala-skatepark-th.jpg', title: 'Bala'},
  {img: './img/bancroft-skatepark-th.jpg', title: 'Bancroft'},
  {img: './img/belleville-skatepark-th.jpg', title: 'Belleville'},
  {img: './img/blind-river-skatepark-th.jpg', title: 'Blind River'},
  {img: './img/bolton-skatepark-th.jpg', title: 'Bolton'},
  {img: './img/bowmanville-skatepark-th.jpg', title: 'Bowmanville'},
  {img: './img/bracebridge-skatepark-th.jpg', title: 'Bracebridge'},
  {img: './img/brampton-skatepark-th.jpg', title: 'Brampton'},
  {img: './img/brantford-skatepark-th.jpg', title: 'Brantford'},
  {img: './img/burlington-skatepark-th.jpg', title: 'Burlington'},
  {img: './img/campbellford-skatepark-th.jpg', title: 'Campbellford'},
  {img: './img/cannington-skatepark-th.jpg', title: 'Cannington'},
  {img: './img/clarkson-skatepark-th.jpg', title: 'Clarkson'},
  {img: './img/courtice-skatepark-th.jpg', title: 'Courtice'},
  {img: './img/elgin-mills-skatepark-th.jpg', title: 'Elgin Mills'},
  {img: './img/etobicoke-skatepark-th.jpg', title: 'Etobicoke'},
  {img: './img/fort-erie-skatepark-th.jpg', title: 'Fort Erie'},
  {img: './img/gananoque-skatepark-th.jpg', title: 'Gananoque'},
  {img: './img/gravenhurst-skatepark-th.jpg', title: 'Gravenhurst'},
  {img: './img/guelph-skatepark-th.jpg', title: 'Guelph'},
  {img: './img/hamilton-skatepark-th.jpg', title: 'Hamilton'},
  {img: './img/huntsville-skatepark-th.jpg', title: 'Huntsville'},
  {img: './img/keswick-skatepark-th.jpg', title: 'Keswick'},
  {img: './img/king-city-skatepark-th.jpg', title: 'King City'},
  {img: './img/kitchener-skatepark-th.jpg', title: 'Kitchener'},
  {img: './img/london-kiwanis-skatepark-th.jpg', title: 'London Kiwanis'},
  {img: './img/london-skatepark-th.jpg', title: 'London'},
  {img: './img/london-stronach-skatepark-th.jpg', title: 'London Stronach'},
  {img: './img/madoc-skatepark-th.jpg', title: 'Madoc'},
  {img: './img/milton-skatepark-th.jpg', title: 'Milton'},
  {img: './img/milton-sportscentre-skatepark-th.jpg', title: 'Milton Sportscentre'},
  {img: './img/minnow-lake-skatepark-th.jpg', title: 'Minnow Lake'},
  {img: './img/mississauga-skatepark-th.jpg', title: 'Mississauga'},
  {img: './img/mount-forest-skatepark-th.jpg', title: 'Mount Forest'},
  {img: './img/northbrook-skatepark-th.jpg', title: 'Northbrook'},
  {img: './img/orangeville-skatepark-th.jpg', title: 'Orangeville'},
  {img: './img/orillia-skatepark-th.jpg', title: 'Orillia'},
  {img: './img/oshawa-skatepark-th.jpg', title: 'Oshawa'},
  {img: './img/paris-skatepark-th.jpg', title: 'Paris'},
  {img: './img/pembroke-skatepark-th.jpg', title: 'Pembroke'},
  {img: './img/peterborough-skatepark-th.jpg', title: 'Peterborough'},
  {img: './img/picton-skatepark-th.jpg', title: 'Picton'},
  {img: './img/port-credit-skatepark-th.jpg', title: 'Port Credit'},
  {img: './img/port-dover-skatepark-th.jpg', title: 'Port Dover'},
  {img: './img/saugeen-shores-skatepark-th.jpg', title: 'Saugeen Shores'},
  {img: './img/shelburne-skatepark-th.jpg', title: 'Shelburne'},
  {img: './img/simcoe-skatepark-th.jpg', title: 'Simcoe'},
  {img: './img/st-thomas-skatepark-th.jpg', title: 'St.Thomas'},
  {img: './img/stouffville-skatepark-th.jpg', title: 'Stouffville'},
  {img: './img/tillsonburg-skatepark-th.jpg', title: 'Tillsonburg'},
  {img: './img/toronto-ashbridges-skatepark-th.jpg', title: 'Toronto Ashbridges'},
  {img: './img/toronto-cj-skatepark-th.jpg', title: 'Toronto Cjs'},
  {img: './img/toronto-cummer-skatepark-th.jpg', title: 'Toronto Cummer'},
  {img: './img/toronto-dufferin-grove-skatepark-th.jpg', title: 'Toronto Dufferin Grove'},
  {img: './img/toronto-dunbat-skatepark-th.jpg', title: 'Toronto Dunbat'},
  {img: './img/toronto-east-york-skatepark-th.jpg', title: 'Toronto East York'},
  {img: './img/toronto-lions-skatepark-th.jpg', title: 'Toronto Lions'},
  {img: './img/toronto-parkdale-skatepark-th.jpg', title: 'Toronto Parkdale'},
  {img: './img/toronto-underpass-skatepark-th.jpg', title: 'Toronto Underpass'},
  {img: './img/toronto-vanderhoof-skatepark-th.jpg', title: 'Toronto Vanderhoof'},
  {img: './img/toronto-wallace-and-emerson-skatepark-th.jpg', title: 'Toronto Wallace and Emerson'},
  {img: './img/trenton-skatepark-th.jpg', title: 'Trenton'},
  {img: './img/uxbridge-skatepark-th.jpg', title: 'Uxbridge'},
  {img: './img/vaughn-hillside-skatepark-th.jpg', title: 'Vaughn Hillside'},
  {img: './img/vaughn-jack-pine-skatepark-th.jpg', title: 'Vaughn Jack Pine'},
  {img: './img/vaughn-twelve-oaks-skatepark-th.jpg', title: 'Vaughn Twelve Oaks'},
  {img: './img/walkerton-skatepark-th.jpg', title: 'Walkerton'},
  {img: './img/warkworth-skatepark-th.jpg', title: 'Warkworth'}
]

function Card(props) {
  const img = require(props.img)
  const {title} = props
  return (
    <div className="col col-fixed" key={title}>
      <a href={`/${title}-skatepark`}><img src={img} alt={title} /></a>
      <span className="cardTitle">{title}</span>
    </div>
  );
}

class App extends Component {
  render() {
    const cardComponents = cards.map(Card);

    return (

    <div className="container">

        <div className="header row">
            <h2>ONTARIO SKATEPARKS</h2>
            <p>
            A free skatepark directory for Ontario, Canada.<br/>
            <span className="byline">Created by <a href="http://ghent.design">David Ghent</a>.</span>
            </p>
        </div>

        <div className="grid grid-center">
          {cardComponents}
        </div>

        <div className="footer">
          <h2>Help me make Ontario Skateparks better.</h2>
          <a href="mailto:ontarioskateparks@gmail.com">Contribute</a> photos or new parks or <a href="#">donate</a> if you want to help keep the lights on.
        </div>

    </div>



    );
  }
}

export default App;
