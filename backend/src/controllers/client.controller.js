const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL|| 'postgres://postgres:admin@localhost:5432/postgres',
    ssl: process.env.DATABASE_URL ? true : false
})

const getClients = async (req,res)=>{
    try
    {
        const {user_id} = req.body;
        if (!user_id) {
            return res.status(400).json({ error: "User ID is missing in the request body" });
        }
        const response = await pool.query('select * from clients where user_id = $1',[user_id]);
        return res.status(200).json(response.rows);
    }
    catch(error){
        res.send("Error: "+error);
    }
};

const getUserById = async(req,res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id = $1',[id]);
    res.json(response.rows);
};

const createUser = async (req,res)=>{
    const {name, email} = req.body;
    const response = await pool.query('INSERT INTO users(name, email) VALUES($1, $2)',[name, email ]);
    console.log(response);
    res.json({
        message: 'User Added Successfully',
        body:{
            user:{name,email}
        }
    });
};

const deleteUser = async(req,res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id = $1',[id]);
    console.log(response);
    res.json(`User ${id} deleted successfully`);
};

const updateUser = async(req,res) => {
    const id = req.params.id;
    const {name, email} = req.body;
    const response = await pool.query('UPDATE users SET name = $1, email=$2 WHERE id = $3',[name, email,id]);
    console.log(response);
    res.json('User updated successfully');
};

module.exports = {
    getClients,
    getUserById,
    createUser,
    deleteUser,
    updateUser
}