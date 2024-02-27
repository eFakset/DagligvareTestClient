const kommuner = require('./kommuner');
const { exec } = require('node:child_process');

var server;

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
/*
Test error reported from DB
*/

test.only('Kommuner - string', async () => {
    return kommuner(3004)
    .then(rsp=>rsp.json())
    .then(data=> {
        expect(data.message[1].id).toBe("1");
    });
});


test('Kommuner - tall1', () => {
    return kommuner(3004)
    .then(rsp=>rsp.json())
    .then(data=> {
        expect(data.message[1].id).toEqual("1");
    });
});

test('Kommuner - tall2', () => {
    return kommuner(3004)
    .then(rsp=>rsp.json())
    .then(data=> {
        expect(Number(data.message[1].id)).toEqual(1);
    });
});

test('Varegruppe - OK', () => {
    return varegruppe(3004)
    .then(rsp=>rsp.json())
    .then(data=>{
        expect(data.errormsg).toEqual('Feil');
    });
})