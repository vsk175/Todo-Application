
TODO APPLICATION:
A simple TODO list application with Angular frontend and ASP.NET Core backend.
Users can view, add, update, and delete tasks. Backend data is managed in-memory.

Prerequisites:
.NET 8 SDK
Node.js (v18+ recommended)
Angular CLI (optional) (if you want to run frontend commands manually)

How to Run the Project:

Step 1: Clone the repository

Step 2: Running the Backend

1. Open a terminal and navigate to the backend project folder: cd backend/Todo

2. Restore NuGet packages: dotnet restore
	
3. Run the backend: dotnet run --launch-profile http

4. By default, the backend runs at: http://localhost:5104

5. Once running, the Swagger UI for exploring and testing the API is available at: http://localhost:5104/swagger


Step 3: Running the Frontend

1. Open a terminal and navigate to the frontend project folder: cd frontend/todo-app

2. Install dependencies: npm install

3. Run the Angular development server: npm start

4. The app will be available at: http://localhost:4200
