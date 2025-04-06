import get from "request-promise";
import * as cheerio from "cheerio";
import taxa from "../utilis/conversaoCambioUtilis.js"
import URL from "../config/apiurlConfig.js"
 
 

const url = URL.url


async function cambioService(rub, aoa, valor) {
    
     

    const data = await get(`${url}/${rub}-${aoa}/${valor}`);
     
  

    const $ = await cheerio.load(data);

    const dataConvesao  = await $("body > div.wrapper > div.content > div.page-content > div > div > div > div.conversion__value > div.conversion__value-text > h2 > span:nth-child(2)").text()
    const dataLastDate = await $("body > div.wrapper > div.content > div.page-content > div > div > div > div.conversion__links.pt-20.conversion__links--mob").text()
    console.log(dataConvesao, dataLastDate)
    const values = await taxa(dataConvesao)
    const result = {
        status: "sucess",
        data: {
            taxasInformal: values,
            atualizacao: dataLastDate 
        }
       
    }
    console.log(result)
    return result
    
}


export default cambioService