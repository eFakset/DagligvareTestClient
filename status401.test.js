const kommuner = require('./kommuner');
const varegruppe = require('./varegrupper');
const { exec } = require('node:child_process');

var server;

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms).unref());
}
/*
beforeAll(() => {
    server = exec('npm start status401 port=3002', { cwd : "../DagligvareMockServer"});
    return sleep(3000)
}, 30000)


afterAll(() => {
    server.kill();
    return sleep(3000);
}, 30000)
*/

test.only('Kommuner - string', async () => {
    return kommuner(3002)
    .then(rsp=>rsp.json())
    .then(data=> {
//        expect(Promise.resolve(data.message[1].id).resolves.toBe("1"));
        expect(data.message[1].id).toBe("1");
    });
}, 15000);


test('Varegrupper - tall1', () => {
    return kommuner()
    .then(rsp=>rsp.json())
    .then(data=> {
        expect(data.message[1].id).toEqual("1");
    });
});

test('Varegrupper - tall2', () => {
    return kommuner()
    .then(rsp=>rsp.json())
    .then(data=> {
        expect(Number(data.message[1].id)).toEqual(1);
    });
});

test('Varegrupper - OK', () => {
    return varegruppe()
    .then(rsp=>rsp.json())
    .then(data=>{
        expect(data.errormsg).toEqual('Feil');
    });
})