const kommuner = require('./kommuner');
const varegrupper = require('./varegrupper');
const butikker = require('./butikker');const { exec } = require('node:child_process');

/*
Test with no server available
*/
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

test.only('Butikker - No fetch', () => {
    return expect(butikker(3006))
    .rejects
    .toThrow('fetch failed');
});

test('Kommuner - string', async () => {
    return kommuner(3005).then(data=> {
        expect(data.message[1].id).toBe("1");
    });
});


test('Kommuner - tall1', () => {
    return kommuner(3005).then(data=> {
        expect(data.message[1].id).toEqual("1");
    });
});

test('Kommuner - tall2', () => {
    return kommuner(3005).then(data=> {
        expect(Number(data.message[1].id)).toEqual(1);
    });
});

test('Varegruppe - OK', () => {
    return varegruppe(3005).then(data=>{
        expect(data.errormsg).toEqual('Feil');
    });
})