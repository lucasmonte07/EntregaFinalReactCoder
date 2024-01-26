import 'bootstrap/dist/css/bootstrap.min.css';
import MainRouter from './components/routes/MainRouter';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <CartProvider>
          <MainRouter />
      </CartProvider>
    </div>
  )
}

export default App;
