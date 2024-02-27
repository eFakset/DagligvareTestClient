function varegrupper(port) {
    return fetch("http://localhost:" + port.toString() + "/varegrupper");
}

module.exports = varegrupper;
