const fs = require('fs');
const path = require('path');

const itemFilePath = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'ta03',
    'item.json'
);

module.exports = class Item{
    static getAllItems(callback){
        
    }
}