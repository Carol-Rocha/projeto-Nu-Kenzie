import logoBranca from "../assets/logoBranca.svg"
import homeImageMobile from "../assets/homeImageMobile.svg"
import illustrationHome from "../assets/IllustrationHome.svg"

const Home = ({ setPage }) => {
  let screenWidth = window.screen.width

  return (
    <div className="home_screen">
      <div>
        <img src={logoBranca} alt="logo" />
        <div>
          <h1>Centralize o controle das suas finanças</h1>
          <span>de forma rápida e segura</span>
          <button
            onClick={() => setPage("transactions")}
            className="font_family_inter"
          >
            Iniciar
          </button>
        </div>
      </div>
      {screenWidth <= 450 ? (
        <img src={homeImageMobile} alt="image" />
      ) : (
        <img src={illustrationHome} />
      )}
    </div>
  )
}
export default Home
