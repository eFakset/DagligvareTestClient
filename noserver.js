function kommuner(port) {
    return fetch("http://localhost:" + port.toString() + "/kommuner").then((rsp)=>(rsp.json()));
}

module.exports = kommuner;
