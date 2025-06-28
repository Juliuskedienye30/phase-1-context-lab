// index.js

function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
  return {
    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents: [],
    timeOutEvents: []
  };
}

function createEmployeeRecords(data) {
  return data.map(createEmployeeRecord);
}

function createTimeInEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour),
    date
  });
  return this;
}

function createTimeOutEvent(dateStamp) {
  const [date, hour] = dateStamp.split(" ");
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour),
    date
  });
  return this;
}

function hoursWorkedOnDate(date) {
  const timeIn = this.timeInEvents.find(e => e.date === date);
  const timeOut = this.timeOutEvents.find(e => e.date === date);
  return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(date) {
  return hoursWorkedOnDate.call(this, date) * this.payPerHour;
}

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(e => e.date);

  const payable = eligibleDates.reduce(function (total, date) {
    return total + wagesEarnedOnDate.call(this, date);
  }.bind(this), 0);

  return payable;
};

function findEmployeeByFirstName(srcArray, firstName) {
  return srcArray.find(emp => emp.firstName === firstName);
}

function calculatePayroll(employees) {
  return employees.reduce((total, emp) => total + allWagesFor.call(emp), 0);
}
