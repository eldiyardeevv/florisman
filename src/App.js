import "./App.scss";
import Footer from "./components/Navbar/Footer/Footer";
import Header from "./components/Navbar/Header/Header";
import MyRoutes from "./routes/MyRoutes";
import ProductContext from "./context/ProductContext";
function App() {
  return (
    <div className="App">
      <ProductContext>
        <Header />
        <MyRoutes />
        <Footer />
      </ProductContext>
    </div>
  );
}

export default App;
