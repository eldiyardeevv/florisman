import "./App.scss";
import Footer from "./components/Navbar/Footer/Footer";
import Header from "./components/Navbar/Header/Header";
import MyRoutes from "./routes/MyRoutes";
function App() {
  return (
    <div className="App">
      <Header />
      <MyRoutes />
      <Footer />
    </div>
  );
}

export default App;
