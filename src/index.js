import girl from './common/image/girl.jpg';
import './common/css/index.css'
import style from './common/css/main.scss'  ////css模块化打包 这样引入样式文件
import './common/css/main.scss'
import _ from 'lodash'
import {add} from './math';



let img = new Image();
img.src = girl;
//img.classList.add("girl");
// img.classList.add(style.sc);
img.classList.add("sc");
var root = document.getElementById("root");
root.innerHTML = '<div class="iconfont icongongzuotai">abc</div>';
root.append(img);
console.log(34);

let btn = document.createElement('button');
btn.innerHTML = 'click';
document.body.appendChild(btn);
btn.onclick = function () {
    let div = document.createElement('div');
    div.innerHTML = 'items';
    document.body.appendChild(div);
};

const arr = [new Promise(() => {
}), new Promise(() => {
})];
arr.map(item => {
    console.log(item);
});

add(1, 10);

console.log(_.join([1, 2, 3], '*******'));

document.addEventListener('click',()=>{
    const element=document.createElement('div');
    element.innerHTML='LYY';
    document.body.appendChild(element);
});
