import logoPreta from "../assets/logoPreta.svg"

const Header = ({ setPage }) => {
  return (
    <header >
      <img src={logoPreta} alt="logo" />
      <button onClick={() => setPage("home")} id="back_home">
        Início
      </button>
    </header>
  )
}
export default Header
