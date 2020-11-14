let name = `tomcat`;
//1.导出方式一
export {
    name
}
//2.导出方式二

export let age = 23;

//3.导出函数

function sum(sum1,sum2) {
    return sum1 + sum2;
}
export {
    sum
}
//4.导出类
class Person{
    run (){
        console.log(`运行。。。`);
    }
}

export {Person}

//export default
let address = "zzs";
export default address

