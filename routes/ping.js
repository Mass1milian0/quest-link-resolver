module.exports = {
    url: "/ping"
    , method: "GET"
    , handler: (req, reply) => {
        reply.send("pong")
    }
}