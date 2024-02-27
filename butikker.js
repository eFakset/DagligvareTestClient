function butikker(port) {
    return fetch("http://localhost:" + port.toString() + "/butikker");
}

module.exports = butikker;
