const fs=require('fs')
//Asynchronously file lai read garda tin wota parameters haru linxa, file name, encoding, callback fn respectively..
fs.readFile('Hello.txt','utf-8',(error1,data1)=>{
    console.log(data1);
    fs.readFile(`./${data1}.txt`,'utf-8',(error2,data2)=>{
        console.log(data2,"second function fired!! ")
        fs.readFile('./input.txt','utf-8',(error3,data3)=>{
            console.log(data3);
            fs.writeFile('./callBack.txt',`${data1}\n\n${data3}\n\nDate Created:${new Date()}`,()=>{
                console.log("file written safely!!")
            });
        })
    })
})