function sum(a, b) {
    return a + b
}


let someThing = sum.call(this, 7, 8);

console.log(someThing);

let employee = {
    theDetail: function(desig, sal) {
        return this.name + " with ID of " +  this.id + " works at " + desig + " and earns " + "£" + sal;
    } 
};

const emp1 = {
    name: 'SWmith',
    id: 564,
    
};

const emp2 = {
    name: 'Sally',
    id: 786, 
};

console.log(employee.theDetail.call(emp1, "Bristol", 567));
console.log(employee.theDetail.call(emp2, "Bath", 675));


let obj = {
    a: 12,
    b: 45
}

function sum2() {
    return (this.a + this.b);
}

console.log(sum2.call(obj));
