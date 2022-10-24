// created by Samira Arte
  function transform(text) {
    var s = text.split('');
    for (var i = 0; i < s.length; i++) {
        switch(s[i]) {
          case ' ':
            break;
          case 'z':
            s[i] = 'a';
            break;
          default:
            s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
        }
    }
    return s.join("");
  }
  console.log(transform("bangtan"))

  