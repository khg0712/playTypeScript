"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Rich from "./Rich.min.mjs.js";
import defineProperty from "./defineProperty";
class Index {
    constructor(person) {
        Rich.LOOPER.addMainLoop('테스트루프', v => {
            console.log(this.keyName_test, this.keyName_test2);
        });
    }
}
__decorate([
    defineProperty(Rich.DEFINE_TYPE.STRING, { value: '태림이 천재' })
], Index.prototype, "keyName_test", void 0);
__decorate([
    defineProperty(Rich.DEFINE_TYPE.STRING, { value: '태림이 천재2' })
], Index.prototype, "keyName_test2", void 0);
;
let test = new Index({ firstName: 'test', lastName: 'test2' });
console.log('현재인스턴스', test);
