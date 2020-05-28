import girl from './common/image/girl.jpg';
import './common/css/index.css'
import style from './common/css/main.scss'  ////css模块化打包 这样引入样式文件
import './common/css/main.scss'

let img = new Image();
img.src = girl;
//img.classList.add("girl");
// img.classList.add(style.sc);
img.classList.add("sc");
var root = document.getElementById("root");
root.innerHTML='<div class="iconfont icongongzuotai">abc</div>';
root.append(img);
console.log(34)