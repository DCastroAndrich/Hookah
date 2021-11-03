import "@coreui/coreui/dist/css/coreui.min.css";
import "./App.css";
import "./components/item/Item.css";
import { CartProvider } from "./context/CartContext";
import Routes from "./router/Routes";

function App() {
  return (
    <>
      <CartProvider>
        <Routes />
      </CartProvider>
    </>
  );
}

export default App;
