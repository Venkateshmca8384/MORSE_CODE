const mapping = {
    ".-" : "A", "-..." : "B","-.-." : "C", "-.." : "D",
    "." : "E", "..-." : "F", "--." : "G", "...." : "H",
    ".." : "I", ".---" : "J", "-.-" : "K", ".-.." : "L",
    "--" : "M", "-." : "N", "---" : "O", ".--." : "P",
    "--.-" : "Q", ".-." : "R", "..." : "S", "-" : "T",
    "..-" : "U", "...-" : "V", ".--" : "W", "-..-" : "X",
    "-.--" : "Y", "--.." : "Z",
    
    
    "-----" : "0",
    ".----" : "1", "..---" : "2", "...--" : "3",
    "....-" : "4", "....." : "5", "-...." : "6",
    "--..." : "7", "---.." : "8", "----." : "9",
}
function morse2text()
{
	let code = document.getElementById("input").value;
	let arr1 = code.split(" ");
	
	let arr2 = arr1.map(x=>{
		if(mapping[x])
		{
			return (mapping[x]);
		}
		else if(x==""){
			return " ";
		}
		else{
			return x;
		}
	});	
	
	let text = arr2.join("").replace(/\s\s+/g, ' ');	
	document.getElementById("output").value = text;		
}