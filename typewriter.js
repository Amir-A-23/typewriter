const sentence = "hello there from lighthouse labs\n";
let delay = 300;
for (let chars of sentence) {
  setTimeout(function(){
    process.stdout.write(chars);
  }, delay);
  delay += 500;
}