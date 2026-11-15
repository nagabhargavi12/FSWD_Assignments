const fs=require('fs');
fs.copyFile('menu.txt','backup.txt',(err)=>{
    if(err){
        console.log('Could not copy the file');
        return;
    }
    console.log('Backup done');
});
