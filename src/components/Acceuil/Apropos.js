import React from 'react'
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import '../../components/Acceuil/Home.css'
import Image from 'react-bootstrap/Image'

import histoire from '../../assets/histoire.jpg'
import tunis from '../../assets/tunis.jpg'
import tozeur from '../../assets/tozeur1.jpg'
import kairouan from '../../assets/kairouan1.jpg'




const propos=()=>{
    return(
        <div>
<div>
<h1>Une brève histoire de la Tunisie</h1>
<br />
<p>La Tunisie est un État d'Afrique du Nord bordé au nord et à l'est par la mer Méditerranée, à l'ouest par l'Algérie . Sa capitale Tunis est située dans le nord-est du pays, Plus de 30 % de la superficie du territoire est occupée par le désert du Sahara, le reste étant constitué de régions montagneuses et de plaines fertiles.</p>
  <p>Les charmes de la Tunisie sont bien connus, que vous choisissiez de vous plonger dans l'histoire de l'ancienne Carthage ou de découvrir Tunis, , les températures agréables, le pays avec ses terres fertiles et villes côtières attire les vacanciers en quête de soleil, de mer et de beaux paysages.</p>
</div>
<br />
<div>
  
  <Image src={histoire} fluid />
</div>
<br />
<br />
<div>
  <h1>La culture Tunisienne</h1>
  <br />
  <p>La culture de la Tunisie comme  le cinema ,musique,litterature, theatre et peinture sont presents a differents niveaux et se diversifie par un héritage de quelque 3 000 ans d'histoire et une position géographique en plein bassin méditerranéen , berceau des civilisations les plus prestigieuses et des principales religions monothéistes.</p>
  <p>La Tunisie a en effet été un carrefour de civilisations et sa culture reflète les traces des cultures punique, arabe, turque, africaine, européenne et musulmane ainsi que l'influence des dynasties successives qui ont régné sur le pays.
</p>
</div>
<br />
<br />
<div>
  <h1>Les principales villes Tunisiennes</h1>
</div>
<br />
<br />
<div>
<CardColumns>
  <Card>
    <Card.Img variant="top" src={tunis}  />
    <Card.Body>
      <Card.Title>Tunis</Card.Title>
      <Card.Text>
         Porte d'entrée de la Tunisie , l'atmosphère de Tunis vous séduira par ses ruelles enchevetrées au sein de l'une des plus belles médinas du monde arabe.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={ kairouan }  />
    <Card.Body>
      <Card.Title>Kairouan </Card.Title>
      <Card.Text>
      Si vous ne deviez visiter qu'une seule ville de Tunisie,ce serait Kairouan.Effectivement,la richesse de cette ville est à l'origine de son inscription en 1998
      sur la liste du patrimoine mondial de l'UNESCO.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={ tozeur } />
    <Card.Body>
      <Card.Title>Tozeur</Card.Title>
      <Card.Text>
      A Tozeur, vous admirerez les murs de briques d'argile des maisons de l'un des plus vieux quartiers de la ville appellé Ouled-Hadef.
      </Card.Text>
    </Card.Body>
  </Card> 
</CardColumns>
</div>
</div>
    )
}
export default propos