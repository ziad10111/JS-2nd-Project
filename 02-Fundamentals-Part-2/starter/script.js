/*const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;

const bills = [calcTip(125), calcTip(555), calcTip(44)];

console.log(bills);*/


// console.log(`jonas has ${jonas.friends.length} and the best is ${jonas.friends[0]}`)

// const ziad = {
//     firstName: 'ziad',
//     lastName: 'badr',
//     birthYear: 1993,
//     job: 'engineer',
//     hasDriver: false,
//     calAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function () {
//         this.calAge()
//         return `${this.firstName} is a ${this.age} year old  ${this.job} and ${this.hasDriver ? 'has a driver licencs ' : 'has not a driver licens'}`;
//     }
// }


// console.log(ziad.getSummary())


// const mark = {
//     firstName: 'mark',
//     lastName: 'miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;

//     }
// }

// console.log(mark.bmi)

// const john = {
//     firstName: john,
//     lastName: smith,
//     mass: 92,
//     height: 1.95
// }



// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`you rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
// }


const billz = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];
const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;

for (let i = 0; i < billz.length; i++) {

    tips.push(calcTip(billz[i]));
    totals.push(tips[i] + billz[i]);


}






const calcAver = function (arr) {
    let sum = 0;
    for (let i = 0; i < totals.length; i++) {
        sum = sum + totals[i];
    }
    return sum / arr.length
}

console.log(calcAver(totals));

// console.log("Bills:", billz);
// console.log("Tips:", tips);
