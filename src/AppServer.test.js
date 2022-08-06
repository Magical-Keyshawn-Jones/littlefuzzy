const db = require('./data/db-config')
const gameModel = require('./api/VideoGames/Model')
const server = require('./api/server')
const request = require('supertest')

beforeEach(async () => {
    await db('videogames').truncate()
    await db.seed.run()
})
afterAll(async () => {
    await db.destroy()
    process.env.NODE_ENV = 'development'
})

test('I love Testing of all Kinds!', () => {
    expect(true).toBe(true)
})
test('check environment', () => {
    expect(process.env.NODE_ENV).toBe('testing')
})

describe('Server Tests', () => {

    test('Server is Up', async () => {
        let response
        response = await request(server).get('/api/videoGames/')
        expect(response.status).toBe(200)
    })

    test('GET /api/videoGames/', async () => {
        let response
        response = await request(server).get('/api/videoGames/')
        expect(response.status).toBe(200)
        expect(response.body).toHaveLength(4)
    })

    test('GET /api/videoGames/:id', async () => {
        let response 
        response = await request(server).get('/api/videoGames/1')
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('Game', 'God of War')
        response = await request(server).get('/api/videoGames/20')
        expect(response.status).toBe(404)
    })

    test('POST /api/videoGames/', async () => {
        let response
        response = await request(server).post('/api/videoGames/').send({
            game: 'Dah Baby', rating: 10, platform: 'Playstation', comment: 'Your not real'
        })
        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('Game', 'Dah Baby')
        response = await request(server).post('/api/videoGames/').send({})
        expect(response.status).toBe(400)
    })

    test('DELETE /api/videoGames/', async () => {
        let response
        response = await request(server).delete('/api/videoGames/1')
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty(
            'message', 'Successfully Delete Post with id: 1'
        )
        response = await request(server).delete('/api/videoGames/1')
        expect(response.status).toBe(404)
        expect(response.body).toHaveProperty(
            'message', 'Game with that Id does not exist'
        )
    })

    test('PUT /api/videoGames/', async () => {
        let response 
        response = await request(server).put('/api/videoGames/1').send({game: 'Dah Baby'})
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('Game', 'Dah Baby')
        response = await request(server).put('/api/videoGames/1').send({games: 'Dah Baby'})
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty(
            'message', 'game, rating, platform, or comment is required'
        )
        response = await request(server).put('/api/videoGames/20').send({game: 'Dah Baby'})
        expect(response.status).toBe(404)
        expect(response.body).toHaveProperty(
            'message', 'Game with that Id does not exist'
        )
    })
})