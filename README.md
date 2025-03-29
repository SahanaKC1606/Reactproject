# User Management System

This is a React-based User Management System that interacts with the Reqres API. The application allows users to log in, view a list of users, edit user details, and delete users.

## Live Demo

The project is deployed on Netlify:\
👉 [User Management System](https://req-res-manager.netlify.app/)

## Features

- **User Authentication**: Users can log in using their credentials.
- **User List**: Displays a paginated list of users fetched from the Reqres API.
- **Search & Filtering**: Users can search for other users by name.
- **Edit User**: Modify user details such as first name, last name, and email.
- **Delete User**: Remove a user from the list.
- **Client-side Navigation**: Uses `React Router` for seamless page transitions.

## Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

## Running the Project Locally

Start the development server:

```sh
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

- `Login.jsx`: Handles user authentication.
- `Userlist.jsx`: Displays the user list with search and pagination.
- `Edituser.jsx`: Allows updating user details.
- `Nav.jsx`: Navigation menu.

## Dependencies

- React
- React Router (`react-router-dom`)
- Axios (`axios`)
- React Toastify (`react-toastify`)

## Assumptions & Considerations

- The application uses [Reqres](https://reqres.in/) as a mock API for testing purposes.
- No real authentication is implemented; the token is stored in `localStorage`.
- Editing and deleting users are simulated but do not persist beyond the session.
- Users are paginated as per Reqres API limits.

## Hosting Information

The project is hosted on Netlify:\
🔗 [User Management System](https://req-res-manager.netlify.app/)



