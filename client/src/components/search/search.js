import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {searchFetch} from '../../redux/actions'
import styles from './search.module.css'

export default props => {
    const dispatch = useDispatch()
    const [display, setDisplay] = useState(props.display)
    const [searchStr, setSearchStr] = useState('')
    const [language, setLanguage] = useState('')
    const [owner, setOwner] = useState('')
    const [enableClick, setEnableClick] = useState(true)


    useEffect(() => {
        setDisplay(props.display)
    }, [props.display])


    const closeModal = () => {
        if (enableClick){
            props.onClick(false)
        }
    }

    const search = () => {
        props.onClick(false)
        let url = '/api/repo/search/'

        if (searchStr){
            url += searchStr + '/'
        }
        if (language){
            url += language + '/'
        }
        if (owner){
            url += owner
        }

        if (searchStr || language || owner){
            dispatch(searchFetch(url))
        }
    }


    return(
        <div className={styles.container} style={{display: display ? 'flex' : 'none'}} onClick={closeModal}>
            <div className={styles.block} onMouseDown={() => setEnableClick(false)} onMouseLeave={() => setEnableClick(true)}>
                <div className={styles.header}>
                    <h2>Search Git Repo</h2>
                </div>
                <div className={styles.input}>
                    <div className={styles.label}>
                        <label >Search</label>
                    </div>
                    <input placeholder={'search string'} onChange={e => setSearchStr(e.target.value)} value={searchStr}/>
                </div>
                <div className={styles.input}>
                    <div className={styles.label}>
                        <label>Language</label>
                    </div>
                    <input placeholder={'language'} onChange={e => setLanguage(e.target.value)} value={language}/>
                </div>
                <div className={styles.input}>
                    <div className={styles.label}>
                        <label >owner</label>
                    </div>
                    <input placeholder={'git, facebook, atom'} onChange={e => setOwner(e.target.value)} value={owner}/>
                </div>
                <div className={styles.input}>
                    <div className={styles.button} onClick={search}>
                        Search
                    </div>
                </div>
            </div>
        </div>
    )
}