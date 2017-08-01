public class StringManipulationTest {
  public static void main(String[] args) {
    // trimAndConcat
    StringManipulation manipulator = new StringManipulation();
    String str = manipulator.trimAndConcat("    Hello     ","     World    ");
    System.out.println(str); // HelloWorld

    // getIndexOrNull String-Char
    char letter = 'o';
    Integer a = manipulator.getIndexOrNull("Coding", letter);
    Integer b = manipulator.getIndexOrNull("Hello World", letter);
    Integer c = manipulator.getIndexOrNull("Hi", letter);
    System.out.println(a); // 1
    System.out.println(b); // 4
    System.out.println(c); // null

    // getIndexOrNull String-String
    String word = "Hello";
    String subString = "llo";
    String notSubString = "world";
    Integer d = manipulator.getIndexOrNull(word, subString);
    Integer e = manipulator.getIndexOrNull(word, notSubString);
    System.out.println(d); // 2
    System.out.println(e); // null

    // concatSubstring
    String word2 = manipulator.concatSubstring("Hello", 1, 2, "world");
    System.out.println(word2); // eworld
  }
}
