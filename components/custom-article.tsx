import React from 'react';
import styles from './custom-article.module.css'

export default function CustomArticle({ children }: { children: React.ReactNode }) {
    return (
        <article className={styles.article}>
            {children}
        </article>
    )
}