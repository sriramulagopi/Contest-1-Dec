let data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
    { name: "Asif", age: 21, profession: "admin" },
    { name: "gopi", age: 23, profession: "developer"},
    { name: "Rahul", age: 22, profession: "developer"},
    { name: "AccioJob", age: 4, profession: "Charging to much money from Students"},
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    data.forEach((a)=>{
        console.log(a);
    })
  }
  printDeveloper();
  
  // 2. Add Data
  function addData(data) {
    let newdata ={};
    newdata.name=prompt("Type your name:");
    newdata.age=prompt("Type your age:");
    newdata.profession=prompt("Type your Profession:");
    data.push(newdata);
    console.log(data);
  }
  addData(data);
  
  // 3. Remove Admins
  function removeAdmin(data) {
    for (let i=0;i<data.length;i++){
        delete data[i];
    }
    console.log(data);
  }
  removeAdmin(data);
  
  // 4. Concatenate Array
  function concatenateArray(data) {
    let data2 = [1,2,3];
    console.log(data.concat(data2));
  }
  concatenateArray(data);

  
  // 5. Average Age
  function averageAge(data) {
    let average = 0;
    data.forEach((a)=>{
        average+=a.age;
    })
    console.log(average/data.length)
  }
  averageAge(data);
  
  // 6. Age Check
  function checkAgeAbove25(data) {
    data.forEach((a)=>{
        if((a.age)>25){
            console.log(a);
        }
    })
  }
  checkAgeAbove25(data);
  
  // 7. Unique Professions
  function uniqueProfessions(data) {
    let count1 = 0;
    let count2 = 1000000000000000;
    for(let j=0;j<data.length;j++){
        let count3 = data[j].profession.length;
        for (let i=0;i<data.length;i++){
            if (count3===(data[i].profession.length)){
                count3++;
            }
        }
        if(count3<count2){
            count1=j;
        }
    };
    console.log("Unique Profession = "+data[count1].profession);
  }
  uniqueProfessions(data)
  
  // 8. Sort by Age
  function sortByAge(data) {
    data.sort((a,b)=>{
        return a.age-b.age;
    })
    console.log(data);
  }
  sortByAge(data)
  
  // 9. Update Profession
  function updateJohnsProfession(data) {
    data[0].profession="manager";
    console.log(data);
  }
  updateJohnsProfession(data)
  
  // 10. Profession Count
  function getTotalProfessions(data) {
    let developer = 0;
    let admin = 0;
    data.forEach((a)=>{
        if (a.profession==="developer"){
            developer++;
        }
        else if(a.profession==="admin"){
            admin++;
        }
    })
    console.log("Developers "+developer);
    console.log("Admins "+admin)
  }
  getTotalProfessions(data)