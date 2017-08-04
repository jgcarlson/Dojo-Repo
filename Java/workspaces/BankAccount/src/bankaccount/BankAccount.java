package bankaccount;
import java.util.*;

class BankAccount {

	private String accountNumber;
	private double checkingBalance;
	private double savingsBalance;
	
	private static int accountsCount = 0;
	private static int totalBalance;
	
	private String getNumber() {
		char[] arr = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '1', '2', '3', '4', '5', '6', '7', '8', '9'};
		int x = 10;
		String word = null;
		while (x > 0) {
			Random r = new Random();
			int max = 26;
			int min = 0;
		    word += arr[r.nextInt(max - min + 1) + min];
		    x--;
		}
		return word;
	}
	
	public static void incrementAccountsCount() {
		accountsCount++;
	}
	
	public BankAccount() {
		accountNumber = this.getNumber();
		incrementAccountsCount();
	}
	
	public void depositChecking(double m) {
		this.setCheckingBalance(this.getCheckingBalance() + m);
	}
	
	public void depositSavings(double m) {
		this.setSavingsBalance(this.getSavingsBalance() + m);
	}
	
	public void withdrawChecking(double m) {
		if (this.getCheckingBalance() - m > 0) {
			this.setCheckingBalance(this.getCheckingBalance() + m);
		} else {
			System.out.println("You have insufficient funds.");
		}
	}
	
	public void withdrawSavings(double m) {
		if (this.getSavingsBalance() - m > 0) {
			this.setSavingsBalance(this.getSavingsBalance() + m);
		} else {
			System.out.println("You have insufficient funds.");
		}
	}

	public double getCheckingBalance() {
		return checkingBalance;
	}

	public void setCheckingBalance(double checkingBalance) {
		this.checkingBalance = checkingBalance;
	}

	public double getSavingsBalance() {
		return savingsBalance;
	}

	public void setSavingsBalance(double savingsBalance) {
		this.savingsBalance = savingsBalance;
	}
	
	public void getTotal() {
		System.out.println(this.checkingBalance + this.savingsBalance);
	}
	
}
