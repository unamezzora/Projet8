import photo from '../../assets/photo.svg'
import WebDev from '../../assets/WebDev.svg'
import weblink from '../../assets/weblink.svg'
import weblinklong from '../../assets/weblinklong.svg'
import ordinateur from '../../assets/ordinateur.svg'
import './apropos.scss'

function Apropos() {
  return (
    <div className="home">
      <div className="blocApropos">
        <div className="blocTitre">
          <div className="blocTitre__titre">À propos</div>
          <div className="blocTitre__bloc"></div>
        </div>
        <div className="blocBleu">
          <div className="blocBleu__image">
            <div className="blocBleu__image__ellipseBlanche">
              <div className="blocBleu__image__ellipseRose"></div>
            </div>
            <img src={photo} alt="Tatiana" className="blocBleu__image__photo" />
          </div>
          <div className="blocBleu__contenu">
            <div className="blocBleu__contenu__text">
              <p>Je suis</p>
              <img
                src={WebDev}
                alt="Web Developpeur"
                className="blocBleu__contenu__text__dev"
              />
            </div>
            <p className="blocBleu__contenu__nom">
              Tatiana
              <br />
              Youssoufa Saidou
            </p>
          </div>
        </div>
      </div>
      <div className="blocMenu">
        <h1 className="blocMenu__titre">Portfolio˺</h1>
        <div className="blocMenu__contenu1">
          <div className="blocMenu__contenu1__image">
            <img src={ordinateur} alt="La conception WEB" />
          </div>

          <div className="blocMenu__contenu1__blocs">
            <div className="blocMenu__contenu1__blocs__gris">CV</div>
            <div className="blocMenu__contenu1__blocs__bleu">Contacts</div>
          </div>
        </div>

        <div className="blocMenu__contenu2">
          <div className="blocMenu__contenu2__blocRose">Mes compétences</div>
          <div className="blocMenu__contenu2__blocNoir">
            <img
              className="blocMenu__contenu2__blocNoir__image"
              src={weblink}
              alt="Abstraction"
            />
          </div>
          <div className="blocMenu__contenu2__blocBeige">Projets</div>
        </div>
      </div>
    </div>
  )
}

/*
<div className="competences">
        <h1 className="competences__titre">Mes compétences˺</h1>
      </div>
      <div className="imageLink">
        <img className="imageLink__img" src={weblinklong} alt="Abstraction" />
      </div>
      <div className="projets">
        <h1 className="projets__titre">Projets˺</h1>
      </div>
      <div className="contact">
        <h1 className="contact__titre">Me contacter˺</h1>
      </div>
*/

export default Apropos
