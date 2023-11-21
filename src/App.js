import "./App.scss";
import Header from "./components/Navbar/Header/Header";
import MyRoutes from "./routes/MyRoutes";
function App() {
  return (
    <div className="App">
      <Header />
      <MyRoutes />
    </div>
  );
}

export default App;
