//Yedi kunai file bata data read wa write garnu chha vaney hami sanga dui wota options haru hunchha...given as:
//********************************1st solution *************/
const http=require('http');
const fs=require('fs');
const { error } = require('console');


const server=http.createServer();
// server.on('request',(request,response)=>{
//     fs.readFile('./Files/largefile.txt','utf-8',(error,data)=>{
//         if(error){
//             return;
//         }
//         else{
    //             response.end(data);
    //         }
    //     });
    // })
    
    
//********************************2nd solution *************/
// server.on('request',(request,response)=>{
//     const rs=fs.createReadStream('./Files/largefile.txt','utf-8');
    
//     rs.on('data',(chunk)=>{                 // Readfile stream ko euta event ho 'data'. jaslai hamile use gareko chhau..
//         response.write(chunk)               // Yo line ma response .end nagarera .write garnu karan chai, response .end vaneko aba read garnu parney data sakiyo vaneko ho. i.e, yesma .end lagako vaye 1st chunk of data aauney bittikai readstream close hunchha..
//     })
//     rs.on('end',()=>{
//         response.end();
//     })
    
//     rs.on('error',(error)=>{
//         response.end(error.message)
//     })
//     // response.end();                         //yo line le aba data sakkiyo vanera janauchha!!
// })



/*****************3rd Solution(PIPE METHOD) ***********/
server.on('request',(req,res)=>{
    let rs=fs.createReadStream('./Files/largefile.txt')
    rs.pipe(res);
    //Pipe method jahile pani readable stream ma matra use garna milchha jaska lagi readable souruce hunu jaruri chha. and yesko main kaam vaneko write stream ra read stream ma hune time delay lai regulate garney ho i.e backpressure handle garney ho..
    //SYNTAX: readableSource.pipe(writableDestination).
})
server.listen('8000','127.0.0.1',()=>{
    console.log("server has started!!");
})
