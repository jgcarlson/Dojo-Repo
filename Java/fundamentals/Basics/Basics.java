import java.util.ArrayList;
import java.util.Arrays;

public class Basics {

  public void printNums() {
    int i = 1;
    while (i < 256) {
      System.out.println("Number: " + Integer.toString(i));
      i++;
    }
  }

  public void printOdds() {
    int i = 1;
    while (i < 256) {
      if (i % 2 == 1) {
        System.out.println("Odd number: " + Integer.toString(i));
      }
      i++;
    }
  }

  public void printOddsWithSum() {
    int i = 1;
    int sum = 0;
    while (i < 256) {
      if (i % 2 == 1) {
        sum += i;
        System.out.println("Odd number: " + Integer.toString(i) + ", Sum: " + Integer.toString(sum));
      }
      i++;
    }
  }

  public void printArray() {
    int[] arr = {1,3,5,7,9,13};
    for (int item:arr) {
      System.out.println(item);
    }
  }

  public void printMax(int[] arr) {
    int num = arr[0];
    for (int item:arr) {
      if (item < num) {
        num = item;
      }
    }
    System.out.println(num);
  }

  public void avg(int[] arr) {
    double sum = 0.0;
    for (int item:arr) {
      sum += item;
    }
    double avg = sum / arr.length;
    System.out.println(avg);
  }

  public void makeOddArray() {
    ArrayList<Integer> y = new ArrayList<Integer>();
    for (int i = 0; i < 256; i++) {
      if (i % 2 == 1) {
        y.add(i);
      }
    }
    System.out.println(y);
  }

  public void getGreaterThanY(int[] arr, int y) {
    int count = 0;
    for (int item:arr) {
      if (item > y) {
        count++;
      }
    }
    System.out.println(count);
  }

  public void makeSquare(int[] arr) {
    ArrayList<Integer> x = new ArrayList<Integer>();
    for (int item:arr) {
      x.add(item * item);
    }
    System.out.println(x);
  }

  public void removeNegatives(int[] arr) {
    ArrayList<Integer> x = new ArrayList<Integer>();
    for (int item:arr) {
      if (item >= 0) {
        x.add(item);
      }
    }
    System.out.println(x);
  }

  public void getMaxMinAvg(double[] arr) {
    ArrayList<Double> x = new ArrayList<Double>();
    double min = arr[0];
    double max = arr[0];
    double sum = 0;
    for (double i:arr) {
      if (i < min) {
        min = i;
      }
      if (i > max) {
        max = i;
      }
      sum += i;
    }
    double avg = min / arr.length;
    x.add(max);
    x.add(min);
    x.add(avg);
    System.out.println(x);
  }

  public void shiftArray(int[] arr) {
    for (int i = 1; i < arr.length; i++) {
      arr[i - 1] = arr[i];
    }
    arr[arr.length - 1] = 0;
    System.out.println(Arrays.toString(arr));
  }

}
