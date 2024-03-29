// Import Knex and database configuration
const knex = require('knex')(require('../knexfile'));

// Function to add users to the database
async function addUsers() {
  try {
    // Data to be inserted into the users table
    const users = [
      { username: 'user1', email: 'user1@example.com', password: 'password1' },
      { username: 'user2', email: 'user2@example.com', password: 'password2' },
    ];

    // Insert users into the database
    await knex('users').insert(users);

    console.log('Data inserted successfully');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    // Close the database connection
    await knex.destroy();
  }
}

// Call the function to add users
addUsers();