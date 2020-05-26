import girl from './common/image/girl.jpg';
import './common/css/index.css'
import './common/css/main.scss'

let img = new Image();
img.src = girl;
// img.classList.add("girl");
img.classList.add("sc");
var root = document.getElementById("root");
root.append(img);
