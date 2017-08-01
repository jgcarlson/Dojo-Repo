public class StringManipulation {

  String trimAndConcat(String strA, String strB) {
    strA = strA.trim();
    strB = strB.trim();
    String str = strA.concat(strB);
    return str;
  }

  Integer getIndexOrNull(String str, char c) {
    if (str.indexOf(c) == -1) {
      return null;
    } else {
      return str.indexOf(c);
    }
  }

  Integer getIndexOrNull(String strA, String strB) {
    if (strA.indexOf(strB) == -1) {
      return null;
    } else {
      return strA.indexOf(strB);
    }
  }

  String concatSubstring(String strA, int int1, int int2, String strB) {
    String str = strA.substring(int1, int2);
    return str.concat(strB);
  }
}
