import fastify from "fastify";
import router from "./routers/router.js";
 

const app = fastify({
    logger: false
})
 app.decorate("notfound", ((reques, reply)=>{
    reply.status(404).send({status: false, mensage: "router not found"})
 }))
app.register(router, {prefix: "/api/v1"});
app.setNotFoundHandler(app.notfound)

app.listen({port: 3000}, ()=>{
    console.log("server no ar")
})