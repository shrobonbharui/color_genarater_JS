// 
let colorcode = document.getElementById('colorcode');
const button = document.getElementById('button');

//  gate color function
const getColor = () =>{
    // gate number and multiply by 16777215
    let rendomnumber = Math.random()*16777215;
    // convert flot to int
    rendomnumber = Math.floor(rendomnumber);
    // convert int to hexcode
    const rendomCode = "#"+rendomnumber.toString(16);
    // use hax code for background color
    document.body.style.backgroundColor = rendomCode;
    // display hax code
    colorcode.innerText = rendomCode;
    // display hax code color
    colorcode.style.color= rendomCode;
}
// event add
button.addEventListener("click", getColor);
button.addEventListener("spacekeydown", getColor);

getColor();