import React from 'react'
import styles from './navbar.module.css'

export default () => {
    return (
        <div className={styles.container}>
            <div className={styles.block}>
                <div className={styles.logo}>
                    <div >
                        <img src={'github.png'} width={50} height={50} alt={'github'}/>
                    </div>
                    <div className={styles.title}>GitHub Repos</div>
                </div>
                <div className={styles.linksGroup}>
                </div>
            </div>
        </div>
    )
}