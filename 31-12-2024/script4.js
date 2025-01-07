function Student(name,grade){
    this.name=name;
    this.grade=grade;
    this.study=()=>{
        console.log(`${name} is Studying BTech`)
    }
}

Student.prototype.getGrade = function(){
    return this.grade;
}

let s1 = new Student("vamshi", "A")
s1.study()
console.log(s1.getGrade())
let s2 = new Student("Teja", "A+")
s2.study()
console.log(s2.getGrade())