module.exports =[
    {
        query:`CREATE TABLE users 
            (
                id INT AUTO_INCREMENT,
                full_name VARCHAR(255) NOT NULL, 
                phone_number VARCHAR(255), 
                email VARCHAR(255) NOT NULL, 
                date_created DATETIME DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY(id)

            );`,
        desc:"USER Table Creation",
        table_name:"users"
    },
    {
        query:`CREATE TABLE form 
            (
                id INT AUTO_INCREMENT,
                owner_id INT NOT NULL,
                title VARCHAR(255) NOT NULL, 
                note TEXT,
                date_created DATETIME DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY(id),
                FOREIGN KEY (owner_id) REFERENCES users(id)

            );`,
        desc:"Forms Table Creation",
        table_name:"form"
    },
    {
        query:`CREATE TABLE form_field
            (
                id INT AUTO_INCREMENT,
                form_id INT NOT NULL,
                is_required INT,
                label VARCHAR(255), 
                placeholder VARCHAR(100),
                field_type VARCHAR(100) NOT NULL,
                date_created DATETIME DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY(id),
                FOREIGN KEY (form_id) REFERENCES form(id)
                
            );`,
        desc:"Form Field Table Creation",
        table_name:"form_field"
    },
    {
        query:`CREATE TABLE form_response
            (
                id INT AUTO_INCREMENT,
                form_id INT, 
                response_user_id INT,
                date_created DATETIME DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY(id),
                FOREIGN KEY (response_user_id) REFERENCES users(id),
                FOREIGN KEY (form_id) REFERENCES form(id)
                
            );`,
        desc:"Form Response Table Creation",
        table_name:"form_response"
    },
    {
        query:`CREATE TABLE form_response_field
            (
                id INT AUTO_INCREMENT,
                form_response_id INT,
                form_field_id INT, 
                value TEXT,
                PRIMARY KEY(id),
                FOREIGN KEY (form_response_id) REFERENCES form_response(id),
                FOREIGN KEY (form_field_id) REFERENCES form_field(id)
                
            );`,
        desc:"Form Response Field Table Creation",
        table_name:"form_response_field"
    }
]