module.exports = function check(str, bracketsConfig) {

  // const bracketsConfig = [['(', ')'], ['[', ']'], ['{', '}']];

  let handledStr = str;

  // let handledStr = '[]][[]'

  let brackets = [];

  bracketsConfig.forEach(bracket => {
    brackets.push(bracket.join(''))
  });

  console.log(brackets);

  for (let i = 0; i < brackets.length;) {
    if (handledStr.includes(brackets[i])) {
      handledStr = handledStr.replace(brackets[i], '');
      i = 0;
    } else {
      i++;
    }
  }

  return handledStr ? false : true;

}
