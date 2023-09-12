//Node js has own built-in module, called events. By using which we can create- , fire- and listen to our own events:
const EventEmitter=require('events');
// const event=new EventEmitter();  //Class banayenau vaney chai yesari nai garda hunchha!!

//Real world project garda hamile sidhai EventEmitter lai instantiate garnu vanda pani class define garera instantiate garchham..like
const evennn=class extends EventEmitter{
    constructor(){
        super();
    }
}
const event=new evennn();
event.on('myName',()=>{
    console.log("event fired!!")
})
event.on('myName',()=>{
    console.log("arko event fired!!")
})
event.on('myName',()=>{
    console.log("ajhai arko event fired!!")
})
event.on('myName',()=>{
    console.log("jhan ajhai arko event fired!!")
})

event.emit("myName")

// Events lai extra parameter dina pani sakinchha.... like
event.on('meroNaam',(name,age)=>{
    console.log(`My name is ${name} and the age is:${age}.`)
})

event.emit('meroNaam',"Prabesh",21);



