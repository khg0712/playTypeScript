"use strict"
import Rich from "./Rich.min.mjs.js"
import Person from "./Person";
import defineProperty from "./defineProperty";

class Index {
    @defineProperty(Rich.DEFINE_TYPE.STRING, {value: '태림이 천재'})
    keyName_test: string;
    @defineProperty(Rich.DEFINE_TYPE.STRING, {value: '태림이 천재2'})
    keyName_test2: string;
    constructor(person: Person) {
        Rich.LOOPER.addMainLoop('테스트루프', v => {
            // this.keyName_test=1
            console.log(this.keyName_test, this.keyName_test2)
        });
    }
};
let test = new Index({firstName: 'test', lastName: 'test2'});
console.log('현재인스턴스', test);
