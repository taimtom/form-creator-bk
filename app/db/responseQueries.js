module.exports={
    CREATE_RESPONSE:"INSERT INTO form_response (form_id, response_user_id) VALUES (?);",
    GET_ALL_RESPONSES:"SELECT * FROM form_response",
    GET_ALL_FORM_RESPONSES:"SELECT users.id AS user_id, form_response.id AS id, form_id,response_user_id, email, full_name, form_response.date_created AS date_created, phone_number FROM form_response INNER JOIN users ON users.id=form_response.response_user_id WHERE form_response.form_id=?",
    GET_ONE_RESPONSE:'SELECT * FROM form_response INNER JOIN users ON users.id=form_response.response_user_id WHERE form_response.id=?',
    UPDATE_ONE_RESPONSE:'UPDATE `form_response` SET ? WHERE ?',

    // --------------------------------------------------------------------
    CREATE_RESPONSE_FIELD:"INSERT INTO form_response_field (form_response_id, form_field_id, value) VALUES (?);",
    GET_ALL_RESPONSE_FIELD:"SELECT * FROM form_response",
    GET_ALL_FORM_RESPONSE_FIELD:"SELECT * FROM form_response_field INNER JOIN form_field ON form_field.id=form_response_field.form_field_id WHERE form_response_field.form_response_id=?",
    GET_ONE_RESPONSE_FIELD:'SELECT * FROM form_response WHERE id = ?',
    UPDATE_ONE_RESPONSE_FIELD:'UPDATE `form_response` SET ? WHERE ?',
}