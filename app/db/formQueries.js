module.exports={
    CREATE_FORM:"INSERT INTO form (owner_id, title, note) VALUES (?);",
    GET_ALL_FORMS:"SELECT * FROM form",
    GET_ONE_FORM:'SELECT * FROM form WHERE id = ?',
    UPDATE_ONE_FORM:'UPDATE `form` SET ? WHERE ?',
    DELETE_FORM:'DELETE FROM form WHERE id=?',
    // FORM FIELDS
    GET_FORM_FIELDS:'SELECT * FROM form_field WHERE form_id = ?',
    GET_ONE_FORM_FIELD:'SELECT * FROM form_field WHERE id = ?',
    CREATE_FORM_FIELD:"INSERT INTO form_field (form_id, label, placeholder, field_type) VALUES (?);",
    GET_ALL_FORM_FIELDS :'SELECT * FROM form_field',
    DELETE_FORM_FIELD:'DELETE FROM form_field WHERE id=?'

}