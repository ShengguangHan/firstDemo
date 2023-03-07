console.log("Hello World");

const h1 = document.querySelector("h1")
console.log(h1);

const content = document.querySelector('.content')
console.log(content);

const img = document.querySelectorAll('footer a img')
console.log(img[0]);
console.log(img[1]);
console.log(img[2]);
// 找第几个图片

const explore = document.querySelector('#explore')
console.log(explore);
explore.addEventListener('click', () => {
  console.log('Click Me Here');
  console.log(h1.style.color);
  h1.style.color= 'black'
})
// 监听explore事件 当点击时发生箭头函数内的要求 显示点击内容/点击后H1颜色改变