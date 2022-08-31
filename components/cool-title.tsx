import React from "react";

import styles from './cool-title.module.css'

export default function CoolTitle({ children, goHomeButton }: { children: React.ReactNode, goHomeButton?: boolean }) {
    return (
        <div className={styles.cool}>
            <h1>{children} <span className={styles.date}>Translator!</span></h1>
        </div>
    )
}