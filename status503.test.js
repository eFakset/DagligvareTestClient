const kommuner = require('./kommuner');
const varegrupper = require('./varegrupper');
const butikker = require('./butikker');
const { exec } = require('node:child_process');

var server;

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
/*
Test 503 status return from server
*/

test('Kommuner - string', async () => {
    return kommuner(3003)
    .then(rsp=>rsp.json())
    .then(data=> {
        expect(data.errormsg).toBeDefined();
    });
});

test('Kommuner - string', async () => {
    return kommuner(3003)
    .then(rsp=>rsp.json())
    .then(data=> {
        expect(data.errormsg).toBe("Feil");
    });
});

test('Kommuner - status 503', () => {
    return kommuner(3003)
    .then(rsp=> {
        expect(rsp.status).toEqual(503);
    });
});

test('Butikker - OK', () => {
    return butikker(3003)
    .then(rsp => {
        expect(rsp.status).toEqual(200);
    });
});

test('Butikker - OK', () => {
    return expect(butikker(3003).then(rsp => rsp.status)).resolves.toEqual(200);
});



