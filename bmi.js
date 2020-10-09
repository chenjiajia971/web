//1、储存Mark、John的升高和体重
const MarkHight = 1.88,MarkMass = 70;
const JohnHight = 1.85,JohnMass = 65;
//2、计算BMI
const MarkBMI = MarkMass / (MarkHight * MarkHight);
const JohnBMI = JohnMass / (JohnHight * JohnHight);
console.log("Mark的BMI是：",MarkBMI);
console.log("John的BMI是：",JohnBMI);
//3、创建布尔变量：用来包含Mark的BMI是否比John更高；
const hight = (MarkBMI > JohnBMI) ? true : false;
//4、打印字符串到控制台：打印hight
console.log("Mark是否比John更高？",String(hight));
