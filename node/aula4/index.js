/*
    Este script tem como objetivo ensinar comopercorrer pastas.
    No exemplo abaixo, pegamos um caminho e olhamos para dentro dele
    percorrendo as pastas e olhando o que tem dentro das pastas
    e fizemos um filtro que mostra apenas arquivos que são css e html.
*/
const fs = require('fs').promises;
const path = require('path');


async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir){
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        if(/\.git/g.test(fileFullPath)) continue;
        if(/node_modules/g.test(fileFullPath)) continue;
        


        if(stats.isDirectory()){
            readdir(fileFullPath);
            continue;
        }
        // encontre apenas o que é css
        //Se for diferente de css e html nao mostra
        if(
            !/.css$/g.test(fileFullPath) && !/.html$/g.test(fileFullPath)
          ) 
        continue;

        // console.log(fileFullPath, stats.isDirectory());
        console.log(fileFullPath);
    }
}
readdir('/Users/inside-mac/Desktop/Udemy/CursoJS')
