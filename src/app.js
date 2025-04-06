import fastify from "fastify";
import router from "./routers/router.js";

const app = fastify({
    logger: false
})

app.get("/", (request, reply)=>{
    reply.send("oi")
})
app.register(router)

app.listen({port: 3000}, ()=>{
    console.log("server no ar")
})