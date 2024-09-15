import photo from '../../assets/photo.svg'
import WebDev from '../../assets/WebDev.svg'
import weblink from '../../assets/weblink.svg'
import ordinateur from '../../assets/ordinateur.svg'
import '../../style/home.scss'

function Home() {
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
          <img
            className="blocMenu__contenu1__image"
            src={ordinateur}
            alt="La conception WEB"
          />
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

export default Home
