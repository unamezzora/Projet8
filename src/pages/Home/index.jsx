import Apropos from '../../components/Apropos'
import Header from '../../components/Header'
import weblinklong from '../../assets/weblinklong.svg'
import '../../style/home.scss'

function Home() {
  return (
    <div className="pagehome">
      <div className="pagehome__apropos">
        <Header />
        <Apropos />
      </div>

      <div className="pagehome__competences">
        <h1 className="pagehome__competences__titre">Mes compétences˺</h1>
      </div>
      <div className="pagehome__imageLink">
        <img
          className="pagehome__imageLink__img"
          src={weblinklong}
          alt="Abstraction"
        />
      </div>
      <div className="pagehome__projets">
        <h1 className="pagehome__projets__titre">Projets˺</h1>
      </div>
      <div className="pagehome__contact">
        <h1 className="pagehome__contact__titre">Me contacter˺</h1>
      </div>
    </div>
  )
}

export default Home
