function stringReverse(s){
  reverse_s = '';
  for(i = s.length - 1; i >= 0; i--){
    reverse_s = reverse_s + s[i];
  }
  return reverse_s;
}
