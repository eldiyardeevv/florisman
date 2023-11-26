import "./App.scss";
import Footer from "./components/Navbar/Footer/Footer";
import Header from "./components/Navbar/Header/Header";
import MyRoutes from "./routes/MyRoutes";
import ProductContext from "./context/ProductContext";
import AuthContext from "./context/AuthContext";
function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
