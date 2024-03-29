// Import Knex and database configuration
const knex = require('knex')(require('../knexfile'));

// Function to add clients to the database
async function addClients() {
  try {
    // Data to be inserted into the clients table
    const clients = [
      { user_id: 1, first_name: 'John', last_name: 'Doe', email: 'john@example.com' },
      { user_id: 2, first_name: 'Jane', last_name: 'Doe', email: 'jane@example.com' },
    ];

    // Insert clients into the database
    await knex('clients').insert(clients);

    console.log('Data inserted successfully');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    // Close the database connection
    await knex.destroy();
  }
}

// Call the function to add clients
addClients();