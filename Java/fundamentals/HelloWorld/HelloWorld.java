import java.util.ArrayList;

public class HelloWorld {
  public static void main(String[] args) {
    int myNumber = 10;
    boolean bool = true;
    double d = 10.4;
    char c = 'a';

    int[] numbers = new int[5];
    numbers[0] = 10;
    numbers[1] = 20;
    numbers[2] = 30;
    numbers[3] = 40;
    numbers[4] = 50;

    for (int i = 0; i < numbers.length; i++) {
      System.out.println(numbers[i]);
    }

    ArrayList<String> students = new ArrayList<String>();
  }
}
