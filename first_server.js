//To create a server we have mainly two steps: creating the server and starting the server!!
const fs=require('fs')
const resp=fs.readFileSync('./Template/index.html','utf-8')
const JsonFile=fs.readFileSync('./Files/products.json','utf-8')//yo chai json file read vayo yeha bata..
const product=JSON.parse(JsonFile)// yo step ma json file lai parse garera js object file ma convert gariyo!!
const productlistHTML=fs.readFileSync('./Template/product_list.html','utf-8')
// To create the server, we proceed as:
const http=require('http')

let productHTMLArray=product.map((prod)=>{
    let output=productlistHTML.replace('{{%Image%}}',prod.productImage)
    output=output.replace('{{%Name%}}',prod.name)
    output=output.replace('{{%ModelName%}}',prod.modeName)
    output=output.replace('{{%ModelNo%}}',prod.modelNumber)
    output=output.replace('{{%Size%}}',prod.size)
    output=output.replace('{{%Camera%}}',prod.camera)
    output=output.replace('{{%Price%}}',prod.price)
    output=output.replace('{{%Color%}}',prod.color)

    return output;

})
const server=http.createServer();//This is event driven architecture... event listener ra event emitter ko role yesma hunchha...
//YO concept lai observer pattern pani vaninchha!!!!
server.on('request',(request,response)=>{
    const path=request.url
    if(path==='/'||path.toLocaleLowerCase()==='/home'){
        response.writeHead(200,{    //Yesari response ko status code ra custom header set garna sakinchha!!
            'Content-Type':'text/html',
            'My-Header':'Custom, Header, set, by, me'
        })
        response.end(resp.replace('{{%Content%}}','You are in Home page!!'))

    }
    else if(path.toLocaleLowerCase()==='/about'){
        response.writeHead(200,{
            'Content-Type':'text/html',
            'My-Header':'Custom, Header, set, by, me'
        })
        response.end(resp.replace('{{%Content%}}','You are in about page.'))
    }
    else if(path.toLocaleLowerCase()==='/contact'){
        response.writeHead(200,{
            'Content-Type':'text/html',
            'My-Header':'Custom, Header, set, by, me'
        })
        response.end(resp.replace('{{%Content%}}','You are in contact page.'))
    }
    else if(path.toLocaleLowerCase()==='/products'){
        let responseHTML=resp.replace('{{%Content%}}',productHTMLArray.join(' '))
        response.writeHead(200,{ 'Content-Type':'text/html',})
        response.end(responseHTML)
        
      
    }
    else{
        response.writeHead(404,{
            'Content-Type':'text/html',
            'My-Header':'Custom, Header, set, by, me'
        })
        response.end('Error 404: Page not found!!')//Yeslai fallback route vaninchha!!
    }
})

//To start the server, we have following one as example:
server.listen('2000','127.0.0.1',()=>{
    console.log("A server has started!!");
})