# Todo and weather Application

This is a weather & Todo application built using React and Chakra UI.
The application allows users to add, edit, and store their todo tasks with a clear goal in mind while also viewing the weather in the upcoming days . The tasks are stored locally in the browser's `localStorage` and can also be persisted to a backend server.

## Features

- View weather the weather details 
- Add new todo tasks with a title, description, and end goal.
- Persist tasks in the browser's `localStorage`.
- Sync tasks with a backend server.
- Form validation to ensure all fields are filled before submission.
- Responsive design using Chakra UI.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/todo-app.git
    cd todo-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your backend server URL:

    ```
    VITE_DATABASE_URL=http://your-backend-url.com
    VITE_API_KEY=123456782345678345678
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

## Usage

### Adding a Todo Task

1. Open the application in your browser.
2. Fill in the title, description, and end goal fields.
3. Click the "Add Task" button.
4. The task will be added to the list and saved in `localStorage`.
5. The task will also be sent to the backend server for persistence.

### Components

#### `TodoForm`

This component renders a form for adding new todo tasks. It uses Chakra UI's form components and includes validation to ensure all fields are filled before submission.

#### `WeatherCurrent`

This component displays the current weather data. It uses Chakra UI's `Card`, `Heading`, and `Text` components for styling.

#### `WeatherDaily`

This component displays the daily weather forecast. It uses Chakra UI's `SimpleGrid`, `Card`, `Heading`, `Text`, and `Tooltip` components for styling.

#### `MainWeather`

This component combines `WeatherCurrent` and `WeatherDaily` to display the current and daily weather data in a single view.

## Collaboration
Reach out if you are trying to collaborate on this 

