const fs=require('fs');
fs.writeFileSync('menu.txt','Idli 30\nDosa 40\nPoori 35\nTea 10');
fs.readFile('menu.txt','utf8',(err,data)=>{
    if(err){
        console.log('Could not read the menu');
        return;
    }
    console.log(data);
});
console.log('Reading the menu...');