
import pic from '../../assets/c.jpg'
import photo from '../../assets/image.png'
import "./style.scss";
const element = document.createElement("header");

element.innerHTML = "this is webpack demo";
// element.classList.add('info')
document.body.appendChild(element);
// document.classList.add
// class Person {
    
//     constructor(fname, lname) {
//        this.fname = fname;
//        this.lname = lname;
//     }
 
//     get fullname() {
//        return this.fname +" "+this.lname;
//     }
//  }

//  console.log(new Person("sals","hussien"));

const img =document.createElement("img");
img.src=pic;
document.body.appendChild(img);