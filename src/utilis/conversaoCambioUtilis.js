


async function convesaoCambioUtilis(values) {

    const dataFinal = await taxaInformal(values)

    return dataFinal
    
}

async function parseToNumero(number){
    
    let parseNumber = ""
    if(number.includes("AOA") === true){
        const dataNumber = number.split("AOA")[0];
        
        parseNumber = dataNumber
    }
    if(number.includes("RUB")){

        const dataNumber = number.split("RUB")[0]
        parseNumber = dataNumber 

    }
    parseNumber = await parseNumber.trim().replace(/\s+/g, '');
    return parseNumber
}


async function taxaInformal(values) {

    let valueParse = await parseToNumero(values)  

    
    valueParse = await  Number.parseInt(valueParse)
    const dataMin= valueParse + (valueParse * 0.17);
    const dataMax =valueParse+ (valueParse * 0.19);

    const response = {
        result: {
            compraMinima: valueParse,
            compraNormal: dataMin,
            compraMaxima: dataMax
        }
    }

    return response

    

}

 


export default convesaoCambioUtilis