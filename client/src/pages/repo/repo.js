import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from 'react-loader-spinner'
import Cart from '../../components/card/card'
import Search from '../../components/search/search'
import {reposFetch} from '../../redux/actions'
import styles from './repo.module.css'

export default () => {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.loading)
    const repos = useSelector(state => state.repos)
    const [searchBtn, setSearchBtn] = useState(false)


    useEffect(() => {
        dispatch(reposFetch())
    }, [dispatch])

    if (loading) {
        return (
            <div className={styles.loader}>
                <Loader
                    type="TailSpin"
                    color="#00BFFF"
                    height={70}
                    width={70}
                />
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.search} onClick={() => setSearchBtn(true)}>Search</div>
                <Search display={searchBtn} onClick={setSearchBtn}/>
            </div>
            <div>
                <h2>Repositories</h2>
                {
                    repos.length ?
                        repos.map((repo, i) => <Cart repo={repo} key={i}/>)
                        :
                        <div className={styles.fotFound}>Repos Not Found</div>
                }
            </div>
        </div>
    )
}