const assert = require('assert');
// const CategoryService = require('../services/category-service');
const  Greetings = require('../js/greet');

const pgp = require('pg-promise')();

// we are using a special test database for the tests
const connectionString = process.env.DATABASE_URL || 'postgresql://localhost:5432/greetingsdatabase';

const db = pgp(connectionString);

describe('The basic database web app', function(){

    // beforeEach(async function(){
    //     // clean the tables before each test run
    //     await db.none("add from products;");
    //     await db.none("delete from categories;");
    // });

    it('should pass the db test', async function(){
        
        // the Factory Function is called CategoryService
        // let categoryService = CategoryService(db);
        let greetings= Greetings(db);
        await greetings.add({
            username: "siphe"
        });

        let counter = await greetings.all();
        assert.equal(1, siphe);
    });

    after(function(){
        db.$pool.end
    })
});