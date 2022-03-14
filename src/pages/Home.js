import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

// similar to function Home()
const Home = () => {
  return (
    <>
      <Logo />
      <Navigation />
      <div className="home">
        <h1>Home</h1>
      </div>
    </>
  );
};

export default Home;
