import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Random;

public class JavaPuzzle {

  public ArrayList<Integer> doTask1() {
    ArrayList<Integer> newArr = new ArrayList<Integer>();
    int[] arr = {3,5,1,2,7,9,8,13,25,32};
    int sum = 0;
    for (int i:arr) {
      if (i > 10) {
        newArr.add(i);
      }
      sum += i;
    }
    System.out.println(sum);
    return newArr;
  }

  public List<String> doTask2() {
    String[] arr =  {"Nancy", "Jinichi", "Fujibayashi", "Momochi", "Ishikawa"};
    List<String> list = Arrays.asList(arr);
    ArrayList<String> arrList = new ArrayList<String>();
    Collections.shuffle(list);
    for (String i:list) {
      if (i.length() > 5) {
        arrList.add(i);
      }
    }
    System.out.println(arrList);
    return list;
  }

  // public void doTask3() {
  //   char[] arr = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
  //   List<Character> list = Arrays.asList(arr);
  //   System.out.println(list);
  // }

  public void doTask4() {
    int max = 100;
    int min = 55;
    ArrayList<Integer> arr = new ArrayList<Integer>();
    int x = 10;
    while(x > 0) {
      Random r = new Random();
      int i = r.nextInt(max - min + 1) + min;
      arr.add(i);
      x--;
    }
    System.out.println(arr);
  }

  public void doTask5() {
    int max = 100;
    int min = 55;
    int[] arr = new int[10];
    int x = 9;
    while(x >= 0) {
      Random r = new Random();
      arr[x] = r.nextInt(max - min + 1) + min;
      x--;
    }
    Arrays.sort(arr);
    System.out.println(Arrays.toString(arr));
    System.out.println("Max: " + arr[9] + ", Min: " + arr[0]);
  }

  public void doTask6() {
    char[] arr = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
    int[] a = new int[5];
    String word;
    for (int i = 0; i < a.length; i++) {
      a[i] = arr[Math.floor(Math.random() * arr.length)];
      word += a[i];
    }
    System.out.println(word);
  }


















}
