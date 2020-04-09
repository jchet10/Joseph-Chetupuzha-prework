const nameList= ['Joseph', 'Anthony', 'Rosily'];

for (let i = 0; i < 3; i++){
    const name=prompt("Please enter a name");
    nameList.push(name);
}
for(let i =0; i<nameList.length;i++){
    console.log(nameList[i]);
}