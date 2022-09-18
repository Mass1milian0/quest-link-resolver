const fs = require('fs')
const port = process.env.PORT || 8080
const fastify = require('fastify')()
fastify.register(require('@fastify/cors'), {
    origin: `${process.env.CORS_ORIGIN}:${port}/*`
})
fastify.register(require('@fastify/static'), {
    root: `${__dirname}//public`,
    prefix: '/', // optional: default '/'
    
})
fastify.register(require('@fastify/url-data'))
fastify.get(
    "/", (req, reply) => {

        return reply.sendFile('./index.html')
    }
)
const start = async () => {
    try {
        await fastify.listen({port, host: '0.0.0.0'})
        console.log("application started on port: " + port)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
routes = fs.readdirSync(`./routes`).filter(file => file.endsWith(".js"))
routes.forEach(route => {
    let routeHandle = require(`./routes/${route}`)
    if(Array.isArray(routeHandle)){
        routeHandle.forEach(e => fastify.route(e))
    }else{
        fastify.route(routeHandle)
    }
})
start()

