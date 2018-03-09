// ******************************
//  Front End Foundations - Lesson 5
// ******************************

// Hands-On 1
class Stadium {
  constructor(name, city, capacity, mainSport, seatsAvailable) {
    this._name = name;
    this._city = city;
    this._capacity = capacity;
    this._mainSport = mainSport;
    this._seatsAvailable = seatsAvailable;
  }

  describeStadium() {
    console.log("The " + this._name + " is in " + this._city + " and holds " + this._capacity + " fans.");
  }

  sportPlayed() {
    console.log("The following sport is mainly played in this stadium: " + this._mainSport);
  }

  seatsAvailable() {
    console.log("There are " + this._seatsAvailable + " seats still available for tonight's game.");
  }
}
console.log("Hands-On 1");
console.log("----------");
let stadium1 = new Stadium("Mercedes Benz Arena", "Atlanta", 70000, "Football", 55000);
stadium1.describeStadium();

// Hands-On 2
console.log();
console.log("Hands-On 2");
console.log("----------");
stadium1.sportPlayed();
stadium1.seatsAvailable();

// Hands-On 3
class Employee {
  constructor(name, salary, hireDate) {
    this.name = name;
    this.salary = salary;
    this.hireDate = hireDate;
  }
  getName() {
    console.log(this.name.toUpperCase());
  }
  getSalary() {
    console.log(this.salary);
  }
  getHireDate() {
    console.log(this.hireDate);
  }
}

class Manager extends Employee {
  constructor(name, salary, hireDate, yearsExperience, department) {
    super(name, salary, hireDate)
    this._yearsExperience = yearsExperience;
    this._department = department;
  }

  yearsExperience() {
    console.log(name + " has " + this._yearsExperience + " year(s) experience as a Manager.");
  }

  department() {
    console.log("Manager of " + this._department);
  }
}

class Designer extends Employee {
  constructor(name, salary, hireDate, degree) {
    super(name, salary, hireDate)
    this._degree = degree;
  }

  yearsExperience() {
    console.log(name + " has " + this._yearsExperience + " year(s) experience as a Designer.");
  }

  degreeCompleted() {
    console.log("Degree completed " + this._degree);
  }
}

class QA extends Employee {
  constructor(name, salary, hireDate, _jobDescription) {
    super(name, salary, hireDate)
    this._jobDescription = jobDescription;
  }

  yearsExperience() {
    console.log(name + " has " + this._yearsExperience + " year(s) experience in QA.");
  }

  jobDescription() {
    console.log("Job description: " + this._jobDescription);
  }
}
