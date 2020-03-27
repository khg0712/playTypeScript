import Rich from "./Rich.min.mjs";

export default function defineProperty(type, option) {
    return function (target: any, propName: string): any {
        // console.log(target);
        // console.log(propName);
        Rich.defineProperty(
            target,
            propName,
            type,
            option
        );
    }
}