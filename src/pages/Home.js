import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

// similar to function Home()
const Home = () => {
  return (
    <div className="home">
      <Logo />
      <Navigation />
      <h1>Accueil</h1>
    </div>
  );
};

export default Home;
