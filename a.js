

// 1 - Function nhận giá trị là 1 function
// function dosth(fn){
//     fn();
// }

/// khi function yêu cầu chỉ truyền function và không có return ta dùng ngoặc nhọn
// dosth(() => {console.log("aAâ")})
// dosth(function(){
//     console.log("AAa")
// })
// 2 - Function nhận giá trị là 1 function và return về giá trị trả về của function đó
// function dosth(fn){
//     console.log(fn)
// }
//em ok chỗ này rồi anh
// dosth(function(){
//     return "AAA"
// })
// dosth(() =>("AAA"))
// dosth(() => {
//         return "Aâ"
// })

// dosth("AAA")
// khi nào mà mình bỏ luôn được dấu ngoặc tròn và dấu suy ra luôn anh
// function xinchao(){
//     return "xinchao"
// }
// dosth(xinchao())
//gia tri truyen vao la 1 tham so co return hoạc 1 function co return


// function a(fn){
//     fn(7)
// }
// a(console.log)
// const a = ["a","b","c","d","e","f","g"];
// Array.prototype.mymap= function(fn){
//     const a=[];
//     for(let i=0;i<this.length;i++){
//         const element =fn(this[i]);
//         a.push(element);
//     }
//     return a;
// }
// const b = a.map(value => <p>{value}</p>)
// console.log(b) 

// b=[<p>a</p>, <p>b</p>,<p>c</p>]s

// const b=a.mymap(a=>a+" hello");
// console.log(b);