function password(data) {
  var str = data.trim().split("");
     var res = false;
 // console.log(str);
  if (str.length >= 6) {
    if (
      str.includes("0") ||
      str.includes("1") ||
      str.includes("2") ||
      str.includes("3") ||
      str.includes("4") ||
      str.includes("5") ||
      str.includes("6") ||
      str.includes("7") ||
      str.includes("8") ||
      str.includes("9")
    ) {
      if (
        str.includes("A") ||
        str.includes("B") ||
        str.includes("C") ||
        str.includes("D") ||
        str.includes("E") ||
        str.includes("F") ||
        str.includes("G") ||
        str.includes("H") ||
        str.includes("I") ||
        str.includes("J") ||
        str.includes("K") ||
        str.includes("L") ||
        str.includes("M") ||
        str.includes("N") ||
        str.includes("O") ||
        str.includes("P") ||
        str.includes("Q") ||
        str.includes("R") ||
        str.includes("S") ||
        str.includes("T") ||
        str.includes("U") ||
        str.includes("V") ||
        str.includes("W") ||
        str.includes("X") ||
        str.includes("Y") ||
        str.includes("Z")
      ) {
        if (
          str.includes("a") ||
          str.includes("b") ||
          str.includes("c") ||
          str.includes("d") ||
          str.includes("e") ||
          str.includes("f") ||
          str.includes("g") ||
          str.includes("h") ||
          str.includes("i") ||
          str.includes("j") ||
          str.includes("k") ||
          str.includes("l") ||
          str.includes("m") ||
          str.includes("n") ||
          str.includes("o") ||
          str.includes("p") ||
          str.includes("q") ||
          str.includes("r") ||
          str.includes("s") ||
          str.includes("t") ||
          str.includes("u") ||
          str.includes("v") ||
          str.includes("w") ||
          str.includes("x") ||
          str.includes("y") ||
          str.includes("z")
        ) {
          if (
            str.includes("!") ||
            str.includes("@") ||
            str.includes("#") ||
            str.includes("$") ||
            str.includes("%") ||
            str.includes("^") ||
            str.includes("&") ||
            str.includes("*") ||
            str.includes("(") ||
            str.includes(")") ||
            str.includes(",") ||
            str.includes(".") ||
            str.includes("<") ||
            str.includes(">") ||
            str.includes("/") ||
            str.includes("'") ||
            str.includes(";") ||
            str.includes(":") ||
            str.includes(`"`) ||
            str.includes("]") ||
            str.includes("[") ||
            str.includes("{") ||
            str.includes("}") ||
            str.includes("|") ||
            str.includes("?")
          ) {
            return true;
          } 
        }
      }
    }
  }
}

module.exports = password;

