module.exports={
    CREATE_USER:"INSERT INTO users (full_name, phone_number, email) VALUES (?);",
    GET_ALL_USERS:"SELECT * FROM users",
    GET_ONE_USER:'SELECT * FROM users WHERE id = ?',
    UPDATE_ONE_USER:'UPDATE `users` SET ? WHERE ?'
}