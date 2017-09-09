const
    express = require('express'),
    path = require('path'),
    router = express.Router(),
    superagent = require('superagent')

module.exports = () => {

    router.get('/api/search', (req, res) => {
        const { show } = req.query

        superagent
            .get('https://api.spotify.com/v1/search?q='+show+'&type=artist')
            .end((err, response) => {
                if (err)
                    res.send(err)
                else
                    //console.log(response)
                    res.json(response.body)
            })
    })

    router.get('/api/detail', (req, res) => {
        const { detail } = req.query


        superagent
            .get('https://api.spotify.com/v1/artists/'+detail+'/albums?market=US')
            .end((err, response) => {
                if (err)
                    res.send(err)
                else
                    //console.log(response)
                    res.json(response.body)
            })
    })

    router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'))
    })

    return router
}
