
class Project {
	private String name = "Project Name";
	private String description = "Project Description";
	
	public Project() {};
	
	public Project(String name) {
		this.name = name;
	}
	
	public Project(String name, String description) {
		this.name = name;
		this.description = description;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
