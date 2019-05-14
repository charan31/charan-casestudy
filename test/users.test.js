import Request from 'supertest'
import Server from '../src'

//Test Suite for routes and service layer

describe('Route /users//api/csv_file', () => {
    it('#GET /user/api/csv_file should return 422 error for invalid Query Params', async () => {

        const retval = await Request(Server)
            .get('/users/api/csv_file')
        expect(retval.res.statusCode).to.equal(422);

    });

    it('#post /user/register should register user', async () => {
        const page_number = 2
        const retval = await Request(Server)
            .get('/users/api/csv_file?page=' + page_number)
        expect(retval.res.statusCode).to.equal(200);

    });
});
