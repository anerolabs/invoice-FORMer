//markdownParser escapes any attempts at XSS attacks and parses any markdown in the input string.
//
//Example:
//  const textToParse = '##### This **is** <XSSattack>line</XSSattack> _one_ \n' +
//   '\n' + '_This_ is **line two** \n';
//
//  Returns: '<h5> This <b>is</b>  &ltXSSattack>line &lt/XSSattack> <i>one</i> </h5> \n \n<i>This</i> is <b>line two</b> \n'

const markdownParser = function (text) {
  if (text.includes('<')) {
    const splitOnBracket = text.split('<');
    const escapedText = splitOnBracket.join(' &#60;');
    text = escapedText;
  }

  const linesArray = text.split('\n');

  let parsedTextLines = [];

  linesArray.forEach(line => {
    let markedUpLineConcat = '';

    if (line.includes('**')) { //Check for ** - bold
      let lineToEdit;
      markedUpLineConcat.length === 0 ? lineToEdit = line : lineToEdit = markedUpLineConcat;

      let openTag = true;

      var splitArray = lineToEdit.split('**');
      lineToEdit = '';

      for (let i = 0; i < splitArray.length; i++) {
        if(i < splitArray.length - 1) {

        let tag = '<b>';

        openTag ? tag = '<b>' : tag = '</b>';

        lineToEdit += splitArray[i] + tag;
        openTag = !openTag;
        } else {
          lineToEdit += splitArray[i];
        }
      }

      markedUpLineConcat = lineToEdit;
    }

    if (line.includes('_')) { //Check for _ - italics
      let lineToEdit;
      markedUpLineConcat.length === 0 ? lineToEdit = line : lineToEdit = markedUpLineConcat;

      let openTag = true;

      var splitArray = lineToEdit.split('_');
      lineToEdit = '';

      for (let i = 0; i < splitArray.length; i++) {
        if(i < splitArray.length - 1) {
        let tag = '<i>';

        openTag ? tag = '<i>' : tag = '</i>';

        lineToEdit += splitArray[i] + tag;
        openTag = !openTag;
        } else {
          lineToEdit += splitArray[i];
        }
      }
      markedUpLineConcat = lineToEdit;
    }

    if (line.includes('#')) { //Check for # - heading
      let lineToEdit;
      markedUpLineConcat.length === 0 ? lineToEdit = line : lineToEdit = markedUpLineConcat;

      let lineToEditArray = lineToEdit.split('');
      let count = 0;
      let i = 0;

      for (i; i < lineToEditArray.length; i++) {
        if (lineToEditArray[i] === '#') {
          count++;
        } else {
          break;
        }
      }

      lineToEditArray.splice(0, count, `<h${count}>`);
      lineToEditArray.push(`</h${count}>`);

      lineToEdit = lineToEditArray.join('');

      markedUpLineConcat = lineToEdit;
    }

    if (markedUpLineConcat.length === 0) {
      parsedTextLines.push(line + '</br>');
    } else {
      parsedTextLines.push(markedUpLineConcat + '</br>');
    };
  })

  return parsedTextLines.join('\n');
};


export default markdownParser;