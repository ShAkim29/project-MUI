import Navbar from "./components/navbar/Navbar";
import AuthContextProvider from "./contexts/authContext";
import ProductsContextProvider from "./contexts/productContext";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
      <Navbar/>
       <MainRoutes/>
       </ProductsContextProvider>
    </AuthContextProvider>
     

  );
}

export default App;
