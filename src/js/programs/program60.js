var empOrg = {
    name:'vikash',
    age:34,
    profession:'labour'
};

var empDuplicat = empOrg;
empDuplicat.name='nameChanged';
console.log(empOrg);
console.log(empDuplicat);