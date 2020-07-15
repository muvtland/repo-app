import React, {useEffect, useState} from 'react'
import styles from './card.module.css'

export default props => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [language, setLanguage] = useState('')
    const [url, setUrl] = useState('')


    useEffect(() => {
        const repo = props.repo
        setName(repo.name)
        setDescription(repo.description)
        setLanguage(repo.language)
        setUrl(repo.url)
    }, [props])


    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.name}>
                    <span>repo name:</span>
                    <div>{name}</div>
                </div>
                <div className={styles.description}>
                    <span>description:</span>
                    {description}
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.language}>
                    <span>language:</span>
                    {language}
                </div>
                <div className={styles.link}>
                    <a href={url} target='_blank' rel="noopener noreferrer">Go To  Repo</a>
                </div>
            </div>
        </div>
    )
}