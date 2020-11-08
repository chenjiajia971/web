//计算三个队的平均分
const MikeAvg = (116+94+123)/3;
const JohnAvg = (89+120+103)/3;
const MaryAvg = (97+134+105)/3;
console.log("MikeAvg:" +MikeAvg, "JohnAvg:" +JohnAvg, "MaryAvg:" +MaryAvg);
//判断获胜队伍，并输出
if ((MikeAvg>JohnAvg) && (MikeAvg<MaryAvg)){
    console.log("Mary获胜！" + MaryAvg);
}
else if ((MikeAvg>JohnAvg) && (MikeAvg>MaryAvg)){
    console.log("Mike获胜！" + MikeAvg);
}
else if ((JohnAvg>MikeAvg) && (MikeAvg>MaryAvg)){
    console.log("John获胜！" + JohnAvg);
}
else{
    console.log("打成平手");
}

//
const MikeAvg_a =(105+90+147)/3;
const JohnAvg_a =(122+110+110)/3;
const MaryAvg_a =(150+113+79)/3;
console.log("MikeAvg_a:" +MikeAvg_a, "JohnAvg_a:" +JohnAvg_a, "MaryAvg_a:" +MaryAvg_a);

if ((MikeAvg_a>JohnAvg_a) && (MikeAvg_a<MaryAvg_a)){
    console.log("Mary获胜！" + MaryAvg_a);
}
else if ((MikeAvg_a>JohnAvg_a) && (MikeAvg_a>MaryAvg_a)){
    console.log("Mike获胜！" + MikeAvg_a);
}
else if ((JohnAvg_a>MikeAvg_a) && (MikeAvg_a<MaryAvg_a)){
    console.log("Mary获胜！" + MaryAvg_a);
}
else{
    console.log("打成平手");
}

