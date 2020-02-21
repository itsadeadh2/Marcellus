const chalk = require('chalk');
const fs = require('fs');

const createFile = (filepath, filecontent) => {
    console.log(chalk.yellow(`Creating ${filepath}`));
    fs.writeFile(filepath, filecontent, (e) => {
        if (e) throw e;
        console.log(chalk.yellow(`${filepath} created`));
    })
}

const readFile = (path) => {
    const data = fs.existsSync(path) ? fs.readFileSync(path, 'utf8') : null
    return data;
}

const addDataBellowLine = (originalString, line, dataToInsert) => {
    const index = originalString.indexOf(line) + line.length;
    const newString = splitValue(originalString, index);
    let final = `${newString[0]}
${dataToInsert}${newString[1]}`
    return final;
}

const splitValue = (value, index) => {
    const data = [];
    data.push(value.substring(0, index))
    data.push(value.substring(index))
    return  data;
}

module.exports = {
    createFile,
    readFile,
    splitValue,
    addDataBellowLine
}