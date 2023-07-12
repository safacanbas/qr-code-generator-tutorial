import fs from 'fs';
import inquirer from 'inquirer';
import qr from 'qr-image';

inquirer.prompt([
    {
    name: "URL",
    message: "Enter URL: ",
    default: "https://www.google.com/"
    }
]).then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile('URL.txt', url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});

// node index.js komutuyla terminalden çalıştırabilirsiniz.
    
