import "@coreui/coreui/dist/css/coreui.min.css";
import "./App.css";
import "./components/item/Item.css";
import { CartContext } from "./context/CartContext";
import Routes from "./router/Routes";

function App() {
  return (
    <CartContext.Provider value={[]} >
      <Routes />
    </CartContext.Provider>
  );
}

export default App;
