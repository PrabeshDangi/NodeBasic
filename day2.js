//To create a server we have mainly two steps: creating the server and starting the server!!
const fs=require('fs')
const url=require('url');//Query parse garna ko lagi url module import gareko chha yo step ma!!
const resp=fs.readFileSync('./Template/index.html','utf-8')
const JsonFile=fs.readFileSync('./Files/products.json','utf-8')//yo chai json file read vayo yeha bata..
const product=JSON.parse(JsonFile)// yo step ma json file lai parse garera js object file ma convert gariyo!!
const productlistHTML=fs.readFileSync('./Template/product_list.html','utf-8')
const productDetail=fs.readFileSync('./Template/product-details.html','utf-8')
const replaceHtml=require('./Modules/Module')
// To create the server, we proceed as:
const http=require('http')


const server=http.createServer((request,response)=>{
    let {query,pathname:path}=url.parse(request.url,true)
    //console.log(x);
    //const path=request.url
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

        if(!query.id){
            let productHTMLArray=product.map((prod)=>{
                return replaceHtml(productlistHTML,prod);
            })
        let responseHTML=resp.replace('{{%Content%}}',productHTMLArray.join(' '))
        response.writeHead(200,{ 'Content-Type':'text/html',})
        response.end(responseHTML)
        } else{
            let prod=product[query.id]
            let productDetailReplaceHtml=replaceHtml(productDetail,prod)
            response.end(resp.replace('{{%Content%}}',productDetailReplaceHtml));//Yesma logic chai k chha vane yedi query parameter diyo vane specified response hamile pathauna sakchhum..yeha text response jadai chha vane yesma html response nee pathauna skachumm..
        }
        
      
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