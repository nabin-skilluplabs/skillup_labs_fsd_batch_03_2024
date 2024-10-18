
import {parse} from 'node-html-parser';
import fs from 'fs' ;
//IRRP function 

(async() => {
try {
    console.log('Completed!!!');

    const response = await fetch('https://www.airbnb.com.au/');
    const pageData = await response.text();
    //const document = parse(pageData);
    fs.writeFileSync('./index.html' , document);


    console.log(pageData);
    console.log('starting to scrape airbnb website...');

}
catch (error) {
console.log('Something didnot work correctly' , error)
}

})();