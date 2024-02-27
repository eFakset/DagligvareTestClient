function kommuner(port) {
    return fetch("http://localhost:" + port.toString() + "/kommuner");
}

module.exports = kommuner;
