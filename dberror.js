function kommuner() {
    return fetch("http://localhost:3001/kommuner").then((rsp)=>(rsp.json()));
}

module.exports = kommuner;
