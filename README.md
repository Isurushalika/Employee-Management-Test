# Employee-Management-Test
Design REST API using spring boot to store, update, delete and retrieve employee data

***How to set up environment***

	* clone the project
	* go inside angular-springboot-client folder and open a cmd to that location
	* type "npm install" and press enter.
	* wait until install the node modules
	* then type "ng serve -o" to run the Angular app
	
	* install MySQL and create database named "users_database" in the root.
	
	* import employee_management folder as a project to any java IDE you familier with(intellij idea,eclipse)
	* then let all the dependencies install(Maven dependencies).
	* go to employee_management\src\main\resources\application.propertise.
	* set MySQL password -->spring.datasource.password = "your MySQL root password"	
	* go to employee_management\src\main\java\com\employee_management\demo\Application.java file
	* right click and run as a java application.
	* If "Tomcat started on port(s): 8080 (http) with context path '/springboot-crud-rest'" shows in the run terminal
	  Everything good to go and you can use the application http://localhost:4200/
	
***How to use the System***	
	
	* Then you can add new employees using "Add Employees" tab at the top left corner.
	* After Add a new employee refresh the browser to see Employee List.
	* See all the Employees created you can click on "Employee List" tab at the top left corner.
	* In Employee List there is three buttons for every employee as "Delete","Update","Details" 
	  which use to delete,update and see details of the certain employee.
	  
	  Thank You
	
