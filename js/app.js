var taskInput = document.getElementById('new-task');
var addButton = document.getElementsByTagName('button')[0];
var incompleteTaskHolder = document.getElementById('incomplete-tasks');
var completedTaskHolder = document.getElementById('completed-tasks');

//Add a new task
var addTask = function() {

    //When the button is pressed
    //Create a new list item with the text from #new-task:
        //input (checkbox)
        //label
        //input (text)
        //button.edit
        //button.delete
        //Each elements, need modified and appended
}
//Edit an existing task
var editTask = function() {
    //When the edit button is pressed
        //If the class of the parent is .edit
            //Switch from .editMode
            //Label text become the input's value
        //else
            //Switch to .editMode
            //input value becomes the label's text

        //Toggle .editMode on the parent
}
//Delete an existing task
var deleteTask = function() {
    //When the Delete button is pressed
        //Remove the parent list item from the unordered list
}
//Mark a task as complete
var taskCompleted = function() {
    //When the Checkbox is Checked
        //Append the task list item to the #completed-tasks
}
//Mark a task as incomplete
var taskIncomplete = function() {
    //When the checkbox is unchecked
        //Append the task list item to the #completed-tasks
}

//Set click handler to addTask function
addButton.onclick = addTask;
