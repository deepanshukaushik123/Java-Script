// var person = {
//     name: 'jack',
//     yearOfBirth: 1990,
//     job: 'agent'
//   }
  
//   function Person (pName, pYearOfBirth, pJob) {
//     this.Name = pName;
//     this.yearOfBirth = pYearOfBirth;
//     this.job = pJob;
//   }
  
//   var john = new Person ('John', 1990, 'pilot');
  
//   console.log(john);


var person = {
    name: 'jack',
    yearOfBirth: 1990,
    job: 'agent'
  }
  
  function Person (pName, pYearOfBirth, pJob) {
    this.Name = pName;
    this.yearOfBirth = pYearOfBirth;
    this.job = pJob;
    
    this.calculateAge = function() {
     console.log(2021 - this.yearOfBirth);
    }
  }
  
  var john = new Person ('John', 1990, 'pilot');
  
  console.log(john.calculateAge());
  
  john.calculateAge()
  