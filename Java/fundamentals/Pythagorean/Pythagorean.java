import java.lang.Math;

public class Pythagorean {
  double calculateHypotenuse(int intA, int intB) {
    double numA = intA * intA;
    double numB = intB * intB;
    double sum = numA + numB;
    double answer = Math.sqrt(sum);
    return answer;
  }
}
