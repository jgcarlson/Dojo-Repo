
class ProjectTest {
	public static void main(String[] arg) {
		Project p1 = new Project();
		Project p2 = new Project("Super Duper Awesome Project");
		Project p3 = new Project("Not Quite as Awesome Project", "It's cool, but just not quite as awesome.");
		p2.setName("This is a new project name.");
		System.out.println(p2.getName());
	}
}
