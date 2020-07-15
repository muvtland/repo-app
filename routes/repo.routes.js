const router = require('express').Router()
const config = require('config')
const fetch = require('node-fetch')
const Bluebird = require('bluebird')
fetch.Promise = Bluebird

const defaultRepos = require('../config/repos.json')


router.get('/', async (req, res) => {
     res.json(defaultRepos)
})

router.get('/search/:str?/:language?/:owner?', async (req, res) => {
    const searchStr = req.params.str || ''
    const language = req.params.language || ''
    const owner = req.params.owner || ''

    const repos = []

    try {
        let result = await fetch(config.get('gitUrl') + searchStr + 'language:' + language + 'user:' + owner)
        result = await result.json()

        for (let i = 0; i < result.items.length; i++){
            const item = result.items[i]
            const {full_name, description, language, html_url} = item
            repos.push({
                name: full_name,
                description: description,
                language: language,
                url: html_url
            })
        }

        res.json(repos)
    }catch (e) {
        res.status(400).json(e.message)
    }
})

module.exports = router