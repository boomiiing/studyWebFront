var mingStudent = {
    name: 'aaa',
    age: 12,
    school: '交大'
};
console.log(mingStudent);
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender);
