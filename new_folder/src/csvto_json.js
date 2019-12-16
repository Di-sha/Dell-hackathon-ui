import { toObject } from 'csvjson';
import { readFile } from 'fs';
readFile('./data/data.csv', 'utf-8', (err, fileContent) => {
    if(err) {
        console.log(err); // Do something to handle the error or just throw it
        throw new Error(err);
    }
    const jsonObj = toObject(fileContent);
    console.log(jsonObj);
});