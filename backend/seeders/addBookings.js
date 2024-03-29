// Import Knex and database configuration
const knex = require('knex')(require('../knexfile'));

// Function to add bookings to the database
async function addBookings() {
  try {
    // Data to be inserted into the bookings table
    const bookings = [
      { 
        user_id: 1,
        title: 'Meeting',
        event_type: 'Meeting',
        start_date: '2024-03-25 08:00:00',
        end_date: '2024-03-25 09:00:00',
        description: 'Team meeting'
      },
      { 
        user_id: 2,
        title: 'Conference',
        event_type: 'Conference',
        start_date: '2024-03-26 10:00:00',
        end_date: '2024-03-26 16:00:00',
        description: 'Annual conference'
      },
      // Add more booking data as needed
    ];

    // Insert bookings into the database
    await knex('bookings').insert(bookings);

    console.log('Data inserted successfully');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    // Close the database connection
    await knex.destroy();
  }
}

// Call the function to add bookings
addBookings();