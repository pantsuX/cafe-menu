var number_as_text, largest_digit, i;

function highest_digit(number_as_text) {
  number_as_text = String(number_as_text);
  largest_digit = '0';
  for (var i_index in number_as_text) {
    i = number_as_text[i_index];
    if (i > largest_digit) {
      largest_digit = i;
    }
  }
  return largest_digit;
}