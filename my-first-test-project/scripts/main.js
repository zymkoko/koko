/*
定义变量
 */
// let myHeading = document.querySelector('h1');
// myHeading.textContent = "hello world!"

/*
条件语句
 */
// let iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//     alert('最喜欢巧克力口味的');
// } else {
//     alert('但是最爱巧克力')
// }

/*
函数
 */
// function multiply(num1, num2) {
//   let result = num1 * num2
//   return result
// }
// 控制台运行
// multiply(2, 4)
// multiply(6, 8)

/*
点击事件
 */
// document.querySelector("html").addEventListener("click", function () {
//   alert('别点, 我怕疼')
// })
// document.querySelector('html').addEventListener("click", () => {
//   alert('我也怕疼')
// })

/*
图像切换器
 */
// let myImage = document.querySelector('img')
// myImage.onclick = function () {
//   let mySrc = myImage.getAttribute('src')
//   if (mySrc === 'images/Dingtalk_20231225142942.jpeg') {
//     myImage.setAttribute('src', 'images/7f4e10cfly1h6xu7l6h8lg20b40b4x6v.gif')
//   } else {
//     myImage.setAttribute('src', 'images/Dingtalk_20231225142942.jpeg')
//   }
// }

/*
保存用户的名字
 */
let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')
function setUserName() {
  // 这里会中断执行
  let myName = prompt('请输入您的名字')
  // 不允许不填
  if (!myName) {
    setUserName()
  } else {
    localStorage.setItem('name', myName)
    myHeading.textContent = 'Mozilla 酷毙了,' + myName
  }
}
// 初始化代码, 构造工作
if (!localStorage.getItem('name')) {
  setUserName()
} else {
  let storedName = localStorage.getItem('name')
  myHeading.textContent = 'Mozilla 酷毙了, ' + storedName
}
// 按钮设置事件处理器
myButton.onclick = function () {
  setUserName()
}
