const responseQueries=require('../db/responseQueries')

module.exports=function(app, db){
    app.post('/response', (req, res)=>{
        const values=[req.body.form_id,req.body.response_user_id]
        db.query(responseQueries.CREATE_RESPONSE, [values], function (err, result) {
            if (err) throw err;
            res.json(result)
          });
    })
    
    app.get('/response/form-response/:form_id', (req, res)=>{
        // view all form responses
        const form_id=req.params['form_id']
        db.query(responseQueries.GET_ALL_FORM_RESPONSES,[form_id],  function (err, result) {
            if (err) throw err;
            res.json(result)
            // console.log("Number of records inserted: " + result.affectedRows);
          });
    })

    app.get('/response/form-response-one/:id', (req, res)=>{
        // view one user
        const id=req.params['id']
        db.query(responseQueries.GET_ONE_RESPONSE,[id] , function (err, result) {
            if (err) throw err;
            res.json(result[0])
            // console.log("Number of records inserted: " + result.affectedRows);
          });
    })

    app.put('/response/:id', (req, res)=>{
        // create form (full_name, phone_number, email)
        // const values=[req.body.full_name,req.body.phone_number,req.body.email]

        db.query(responseQueries.UPDATE_ONE_USER,[req.body, req.params], function (err, result) {
            if (err) throw err;
            res.json(result)
            // console.log("Number of records inserted: " + result.affectedRows);
          });
    })


    // ----Response Fields---------------


    app.post('/response-field', (req, res)=>{
        // create  form_response_id, form_field_id, value
        const values=[req.body.form_response_id,req.body.form_field_id,req.body.value]
        db.query(responseQueries.CREATE_RESPONSE_FIELD, [values], function (err, result) {
            if (err) throw err;
            res.json(result)
            // console.log("Number of records inserted: " + result.affectedRows);
          });
    })
    app.get('/response/form-response-one-fields/:response_id', (req, res)=>{
        // view one user
        const id=req.params['response_id']
        db.query(responseQueries.GET_ALL_FORM_RESPONSE_FIELD,[id] , function (err, result) {
            if (err) throw err;
            res.json(result)
            // console.log("Number of records inserted: " + result.affectedRows);
          });
    })
    
    app.get('/response-field', (req, res)=>{
        // view all users
        db.query(responseQueries.GET_ALL_USERS,  function (err, result) {
            if (err) throw err;
            res.json(result)
            // console.log("Number of records inserted: " + result.affectedRows);
          });
    })

    app.get('/response-field/:id', (req, res)=>{
        // view one user
        const id=req.params['id']
        db.query(responseQueries.GET_ONE_USER,[id] , function (err, result) {
            if (err) throw err;
            res.json(result)
            // console.log("Number of records inserted: " + result.affectedRows);
          });
    })

    app.put('/response-field/:id', (req, res)=>{
        // create form (full_name, phone_number, email)
        // const values=[req.body.full_name,req.body.phone_number,req.body.email]

        db.query(responseQueries.UPDATE_ONE_USER,[req.body, req.params], function (err, result) {
            if (err) throw err;
            res.json(result)
            // console.log("Number of records inserted: " + result.affectedRows);
          });
    })
}