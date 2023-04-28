// Tests that a valid character id returns the corresponding character data. 
// const app = require('../src/index');
// const supertest = require('supertest');
// const agent = supertest(app);
const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';
const { postFav, deleteFav } = require('../src/controllers/handleFavorites');
let myFavorites = [];
it("Responde un objeto con las propiedades id, name, etc", async () => {
        const response = await axios.get(`${URL}1`);
        const character = response.data;
        expect(character).toHaveProperty('id');
        expect(character).toHaveProperty('name');
        expect(character).toHaveProperty('species');
        expect(character).toHaveProperty('origin');
        expect(character).toHaveProperty('image');
        expect(character).toHaveProperty('gender');
        expect(character).toHaveProperty('status');
    });



    // Tests that a new favorite item can be successfully added to the list. 
        // Tests that req and res objects can be mocked for testing purposes. 
        it("test_mocked_req_res_objects", () => {
            const req = { body: "new favorite item" };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
            postFav(req, res);
            expect(res.status).toHaveBeenCalled();
            expect(res.json).toHaveBeenCalled();
        });