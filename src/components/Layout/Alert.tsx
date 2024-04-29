import React, { ReactNode } from "react";
import styles from './Alert.module.css';

export type AlertType = {
    className: string;
    children: ReactNode;
}

const Alert: React.FC<AlertType> = ({ className, children }) => {
    return <div data-testid="alert" className={`${styles.alert} ${styles[className]}`}>{children}</div>;
}

export default Alert;
