//  javascript object

// new object

let newobject = {FirstName:"Samir" , LastName:"Jogani" , Age:"25"  , Address:"Surat"};

console.log(newobject.FirstName);

let new_object =
{
    FirstName:"Samir",
    LastName:"Jogani",
    Age:"25",
    Address:"Surat",
    myFunction : function(){
        return this;
    }
};

console.log(newobject);
console.log(new_object.myFunction());



