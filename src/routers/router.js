import cambioPost from "../controllers/cambioController.js";


const router = async(fastify)=>{
    fastify.post("/", cambioPost)
    fastify.get("/api", (req, res)=>{
        res.send("ola mundo")
    })

}

export default router