import cambioService from "../service/cambioServices.js";

  const cambioPost = async (request, reply)=>{
    const body = request.body;
    if(!body){
        reply.status(200).send({
            status: "false",
            message: "campos vazio"
        })
    }

    console.log(body)

    /*
      "": "ve",
  "conversionto":""


    */
    if(!body["coin"] =="aoa" && !body["conversionto"] =="rub" || !body["coin"] =="rub" && !body["conversionto"] =="aoa"  ){
        reply.status(200).send({
            status: "false",
            message: "coint aoa and rub"
        }) 
    }

    console.log(body["coin"].length, body["conversionto"].length)
   
    if(body["coin"].length ==3 && body["conversionto"].length == 3){
        const data = await cambioService(body["coin"], body["conversionto"], body.value);
        reply.send(data)
    }else{
        reply.status(500)
        .send(
            {
                status: "false",
                message: "coint not found"
            }
        )
    }
 }
 export default cambioPost