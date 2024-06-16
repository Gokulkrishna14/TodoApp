# TodoApp

=> A simple todo list application built using React with functionalities such as adding, editing, deleting, and marking todos as completed.

# Getting started
1. Clone the repository:
git clone https://github.com/your-username/todo-app.git

2. Navigate to the project directory:
cd todo-app

3. Install dependencies:
npm install

4. Start the development server:
npm start


# Features
1. Add new todos with a title.
2. Edit existing todos.
3. Mark todos as completed.
4. Delete todos.
5. Local storage integration to persist todos.

# Technologies Used
1. React
2. React Context API
3. Material-UI for icons
4. CSS Modules for styling

# Project Structure
* The project structure is organized as follows:

src/
components/
TodoForm/ - Contains the form for adding todos.
TodoItem/ - Renders individual todo items.
context/ - Contains the TodoProvider for managing todos using React Context API.
App.css - Global styles for the application.
App.js - Main component rendering the todo list and managing state.
TodoForm.js - Form component for adding new todos.
TodoItem.js - Component to render individual todo items.
context.js - File defining the TodoContext and TodoProvider using React Context API.
index.js - Entry point of the application.