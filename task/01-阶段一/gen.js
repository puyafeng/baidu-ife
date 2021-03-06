var fs = require('fs');
let source = `任务一：面向零基础的HTML代码编写

任务二：基于任务1的HTML代码，实现简单的CSS代码编写

任务三：HTML、CSS布局入门，三栏式布局的实践

任务四：HTML、CSS布局深入，定位和居中问题的实践

任务五：基于任务1的HTML代码，实现一个稍微复杂的CSS代码编写

任务六：按照设计图，通过HTML/CSS实现一个像报纸杂志一样的页面布局排版

任务七：按照设计图，通过HTML/CSS实现一个产品官网

任务八：网格/栅格化布局学习与实践

任务九：按照设计图，通过HTML/CSS实现一个复杂的业务系统页面

任务十：学习和练习Flex布局

任务十一：移动Web开发入门，按照设计稿实现一个移动端的页面

任务十二：CSS 3新特性的小练习`;
source = source.replace(/ +/g, "").replace(/\//g, "、");
console.log(source);
let array = source.split(/\n+/g);
console.log(array);
array = array.map((ele, index) => {
    return (index + 1 + "").replace(/(^\d$)/g, "0$1") + "-" + ele;
});
var fs = require('fs');
array.forEach(ele => {
    fs.mkdir(ele, function (err) {
        if (!err) {
            console.log(ele);
            fs.writeFile(`./${ele}/ReadMe.md`, "", function (err, data) {
                if (err) {
                    console.log(err);
                }
            });
        } else {
            console.log(err);
        }
    });
});