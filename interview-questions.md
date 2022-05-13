# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: The foreign key is used to reference the primary key of a table. To correct this mistake the developer must go into the Student model and add the foreign key. In this case the foreign key would be Cohort_id.

  Researched answer: A foreign key is a column or group of columns in a relational database table that acts as a cross-reference between tables because it references the primary key of another table. To fix the issue stated above, we must first go back to the Cohort model to obtain the foreign key from one of the columns and apply it to the Students model. The foreign key would be Cohort_id.



2. Which RESTful routes must always be passed params? Why?

  Your answer: The RESTful routes that must always be passed params are show, update, and delete. These routes must always be passed with params because they cannot be accomplished without.

  Researched answer: The RESTful routes that must always be passed with params are show, update, and delete. Unlike the other routes these routes require some input to identify which route with be shown, updated, or deleted.



3. Name three rails generator commands. What is created by each?

  Your answer: Rails generate model: creates the model, rails generate controller: creates the controller, rails generate resource: creates the model, migration, routes, and controller.

  Researched answer: Rails generate model: creates the model, rails generate controller: creates the controller, rails generate resource: creates the model, migration, routes, and controller.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students          
Controller Method: students#index; this will display a list of all students.

action: "POST"   location: /students       
Controller Method: students#create; this will create one new student.

action: "GET"    location: /students/new
Controller Method: students#new; this will return a form for creating a new student.

action: "GET"    location: /students/2  
Controller Method: students#show; this will show the student that is assigned to id 2.

action: "GET"    location: /students/2/edit    
Controller Method: students#edit; this will return a form for editing student.

action: "PATCH"  location: /students/2      
Controller Method: students#update; this will update a photo for student assigned to id 2.

action: "DELETE" location: /students/2      
Controller Method: students#destroy; this will destroy a photo for student assigned to id 2.


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I can click on the "Start a New To Do List" button.
2. As a user, I am now prompted to create a name for the new list. Name must be less than 20 characters.
3. As a user, I can now click on the empty list or the yellow plus sign at the corner right to begin a new list.
4. As a user, I am now prompted to type a name for item on the to do list. I can also click on an add or cancel button to confirm item.
5. As a user, I can see my new item on the list and can also see options to "Edit Item", "Delete Item", "Mark Item as Complete", and "Add New Item".
6. AS a user, I can click on edit item and add a description to item or change the name.
7. As a user, I can click on delete item to delete item from list.
8. As a user, I can click on mark item as complete and see a green check on items name.
9. AS a user, I can add 10 items to the list. 
10. AS a user, I can save the list.
