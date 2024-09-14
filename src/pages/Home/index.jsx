import photo from '../../assets/photo.svg'
import WebDev from '../../assets/WebDev.svg'
//import ellipse from '../../assets/ellipse'
//import ordinateur from '../../assets/ordinateur.svg'
import '../../style/home.scss'

function Home() {
  return (
    <div>
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

    /*(
      <div className="blocMenu">
        <h1 className="blocMenu-titre">Portfolio</h1>
        <div className="blocMenu-contenu">
          <img
            className="blocMenu-contenu-image"
            src={ordinateur}
            alt="La conception WEB"
          />
        </div>
        <div className="blocMenu-contenu-cv">
          <div>CV</div>
          <div>Contacts</div>
        </div>
      </div>
    )*/
  )
}

export default Home
