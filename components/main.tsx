import React from "react";

import styles from './main.module.css'

export default function Main({ children }: { children: React.ReactNode }) {
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}