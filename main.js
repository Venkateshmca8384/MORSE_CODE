const mapping = {
    "A" : ".-", "B" : "-...","C" : "-.-.", "D" : "-..",
    "E" : ".", "F" : "..-.", "G" : "--.", "H" : "....",
    "I" : "..", "J" : ".---", "K" : "-.-", "L" : ".-..",
    "M" : "--", "N" : "-.", "O" : "---", "P" : ".--.",
    "Q" : "--.-", "R" : ".-.", "S" : "...", "T" : "-",
    "U" : "..-", "V" : "...-", "W" : ".--", "X" : "-..-",
    "Y" : "-.--", "Z" : "--..",
    
    
    "0" : "-----",
    "1" : ".----", "2" : "..---", "3" : "...--",
    "4" : "....-", "5" : ".....", "6" : "-....",
    "7" : "--...", "8" : "---..", "9" : "----."
}


function text2morse()			
{

let input = document.getElementById("input").value;

input = input.toUpperCase();

let arr1 = input.split("");

let arr2 = arr1.map(x => {
if(mapping[x])
{
return mapping[x];
}
else{						
return x;
}
});

let code = arr2.join(" ");

document.getElementById("output").value = code;


}