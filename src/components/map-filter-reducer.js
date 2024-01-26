
const employees = [{
    name: 'Luke',
    department: 'Financeiro',
    salary: 1500
  }, {
    name: 'Han',
    department: 'Financeiro',
    salary: 1200
  }, {
    name: 'Ben',
    department: 'Marketing',
    salary: 2000
  }, {
    name: 'Leia',
    department: 'Marketing',
    salary: 1750
  }, {
    name: 'Rey',
    department: 'Financeiro',
    salary: 1000
  }];

const totalSalary = employees.filter(employee => {

    return (employee.department === 'Financeiro');
  
  }).map(item => {
    
    return item.salary *= 1.5;
  
  }).reduce((total, currentValue) => {
  
    return total + currentValue;
  
  });

 //  const totalSalary = employees
 //    .filter(employee => (employee.department === 'Financeiro'))
 //    .map(item => item.salary *= 1.5)
 //    .reduce((total, currentValue) => total + currentValue);

 console.log(totalSalary);