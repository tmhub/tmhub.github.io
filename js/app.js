document.addEventListener("readystatechange", function () {
  if (this.readyState === "complete") {
    anchors.add();
  }
});

/**
 * baseRank is used for first letter:
 *  a - 100
 *  b - 200
 *  and so on
 *
 * rank 100/27 is used for the second letter:
 *  ab - 107
 *  az - 199
 *
 * The third rank is not accurate, with baseRank 100.
 * Change the rank to 600 to use third letter.
 * rank 100/27/27 is used for third letter:
 *  aaz - 106
 *  aba - 107
 *  abz - 110
 */
var getSortorder = function(letters, baseRank) {
  var sortorder = 0,
      rank = baseRank || 100;

  letters.split('').every(function(letter, i) {
    if (i === 1) {
      rank /= 27;
    } else if (i === 2) {
      rank /= 27;
    }
    sortorder += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(letter.toUpperCase()) * rank + rank;

    return i < 2;
  });

  return Math.floor(sortorder);
};
document.addEventListener("readystatechange", function () {
  if (this.readyState === "complete") {
    var input = document.getElementById('module_code'),
      result = document.getElementById('module_sortorder');

    if (input && result) {
      input.addEventListener('keyup', function() {
        result.innerHTML = getSortorder(this.value);
      }, false);
    }
  }
});