import React, { useContext, useReducer } from "react";
import logoImage from "../../assets/logo.jpg";
import Button from "./Button";
import styles from './Header.module.css';
import { CartContext } from "../../context/CartProvider";
import Modal from "./Modal";
import Cart from "../Cart/Cart";
import { ModalContext } from "../../context/ModalProvider";

const Header:React.FC = () =>{

    const {items} = useContext(CartContext);
    const {handelModal} = useContext(ModalContext);

    const count = items.reduce((acc,currentIem)=> acc + currentIem.count ,0)
   
    return <div className={styles["main-header"]}>
        <h1 className={styles.title}>
            <img src={logoImage} alt="logo"/>
            Food App.
        </h1>
        <nav>
            <Button onClick={handelModal} className={styles["text-button"]}>Count {count}</Button>
        </nav>

        <Modal>
            <Cart />
        </Modal>
    </div>
}

export default Header;