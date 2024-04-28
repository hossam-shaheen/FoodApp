import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./context/CartProvider";
import ModalProvider from "./context/ModalProvider";


const App:React.FC = () => {
  return (<CartProvider>
       <ModalProvider>
          <Header />
          <Meals />
      </ModalProvider>
    </CartProvider>
  );
}

export default App;
