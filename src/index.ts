"use strict"
import Rich from "./Rich.min.mjs.js"
import Person from "./Person";
import defineProperty from "./defineProperty";

class Index {
    @defineProperty(Rich.DEFINE_TYPE.STRING, {value: '태림이 바봉16'})
    keyName_test: string ;
    constructor(person: Person) {
        console.log(this)
        Rich.LOOPER.addMainLoop('test', v => {
            // this.keyName_test=1
            console.log(this.keyName_test)
        });
    }
};
let test = new Index({firstName: 'test', lastName: 'test2'});
console.log('test', test);
