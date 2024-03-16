# Search Places

This project provides a React application that features list of places and the country flag and name in a dynamic table with paginated data fetched from an API. It includes a debounced search functionality, allowing users to filter results in real-time as they type, without overwhelming the API with requests. This README outlines the setup, features, and usage of the project.

## Features

- **Debounced Search**: Implements a debounce mechanism to limit API requests as the user types in the search input, enhancing performance and user experience.
- **Pagination**: Supports navigation through data in a paginated table format, with "Next" and "Previous" controls.
- **Dynamic Data Fetching**: Fetches data based on the user's search term and the current page, displaying relevant results in a table.
- **Responsive Table Indexes**: Adjusts table row indexes based on the current page, ensuring accurate numbering across pagination.

## Setup

To get this project up and running on your local machine, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/abhishek-sde-singh/Search_-places
   ```

2. **Install Dependencies**

   Navigate to the project directory and install the required dependencies:

   ```bash
   cd search-places
   npm install
   ```

3. **Start the Development Server**

   Once the dependencies are installed, you can start the development server:

   ```bash
   npm run dev
   ```

   This will launch the application in your default web browser at `http://localhost:5173/`.

# NOTE - Genereate your own api key

`https://rapidapi.com/wirefreethought/api/geodb-cities/`
