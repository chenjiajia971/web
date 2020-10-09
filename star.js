/*定义一个空字符串作为“*”之间的间隔*/
let arr = "";
/*外层循环控制行数,先输出上半部分的4行 */
        for (let row = 1; row <= 4; row++) {

            for (let m = 1; m <= 4 - row; m++) {    
                arr = arr + " "                      
            } 
            for (let n = 1; n <= row; n++) {
                arr = arr + "* ";
            }
            /*换行 */
            arr = arr + "\n";
        }
        /*外层循环控制行数,输出下半部分的3行*/
        for (let row = 1; row <= 3; row++) {

            for (let m = 1; m <= row; m++) {         
                arr = arr + " " 
            } 
            for (let n = 1; n <= 4 - row; n++) { 
                arr = arr + "* ";                       
            }
            arr = arr + "\n";
        }
        console.log(arr);