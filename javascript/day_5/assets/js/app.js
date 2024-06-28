let pincode = '';
while(pincode !== '1234') {
    pincode = prompt('Enter Pincode')
}

let grid = 8;
function createPattern(grid){
    let pattern = ' ';
    for(let row = 0; row < grid; row++){
        for(let col = 0; col < grid; col++){
            if((row + col) % 2 === 0){
                pattern += ' '; 
            }
            else{
                pattern += '#';
            }
        }
        if (row < grid - 1){
            pattern +='\n';
        }
    }
    return pattern;
}

console.log(createPattern(grid));