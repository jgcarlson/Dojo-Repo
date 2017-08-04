package bankaccount;

class BankAccountTest {
	public static void main(String[] args) {
		BankAccount b = new BankAccount();
		b.depositChecking(300.00);
		System.out.println(b.getCheckingBalance());
	}
}
