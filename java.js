function cereatTable(){
    let table= document.getElementById("as").value;
    
for (let index = 1; index <= 10; index++) {
    document.write(
        "<h1>" + table + " x " + index + " = " + table * index + "</h1>");
    
    
}
}