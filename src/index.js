module.exports = function check(str, bracketsConfig) {

  let handledStr = str;

  const brackets = [];

  bracketsConfig.forEach(bracket => {
    brackets.push(bracket.join(''))
  });

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
