const formQueries=require('../db/formQueries')

module.exports=function(app, db){
    app.get('/', (req, res)=>{
        var sql = "";
        db.query(sql, function (err, result) {
          if (err) return err;
          console.log("Table created");
        });

    })

    app.post('/forms', (req, res)=>{
        // create form (owner_id, title, note)

        const values=[req.body.owner_id,req.body.title,req.body.note]
        db.query(formQueries.CREATE_FORM, [values], function (err, result) {
            if (err) return err;
            res.json(result)
            // console.log("Number of records inserted: " + result.affectedRows);
          });
    })

    app.get('/forms', (req, res)=>{
        // view all forms
        db.query(formQueries.GET_ALL_FORMS,  function (err, result) {
            if (err) return err;
            res.json(result)
            // console.log("Number of records inserted: " + result.affectedRows);
          });
    })

    app.get('/forms/:id', (req, res)=>{
        // view one form
        const id=req.params['id']
        db.query(formQueries.GET_ONE_FORM,[id] , function (err, result) {
            if (err) return err;
            res.json(result[0])
            // console.log("Number of records inserted: " + result.affectedRows);
          });
    })

    app.put('/forms/:id', (req, res)=>{
        // create form (full_name, phone_number, email)
        // const values=[req.body.full_name,req.body.phone_number,req.body.email]

        db.query(formQueries.UPDATE_ONE_FORM,[req.body, req.params], function (err, result) {
            if (err) return err;
            res.json(result)
            // console.log("Number of records inserted: " + result.affectedRows);
          });
    })

    app.delete('/forms/:id', (req, res)=>{
        // delete form field
        const id=req.params['id']
        db.query(formQueries.DELETE_FORM,[id],  function (err, result) {
            if (err) return err;
            res.json(result)
            // console.log("Number of records inserted: " + result.affectedRows);
          });
    })


    // -------------------- FORM FIELDS --------------------------------------------------
    app.get('/forms/form-fields/:form_id', (req, res)=>{
        // view one form
        const id=req.params['form_id']
        db.query(formQueries.GET_FORM_FIELDS,[id] , function (err, result) {
            if (err) return err;
            res.json(result)
            // console.log("Number of records inserted: " + result.affectedRows);
          });
    })

    app.get('/forms/form-fields', (req, res)=>{
        // view one form
        db.query(formQueries.GET_ALL_FORM_FIELDS, function (err, result) {
            if (err) return err;
            res.json(result)
            // console.log("Number of records inserted: " + result.affectedRows);
          });
    })

    app.post('/forms/form-fields', (req, res)=>{
        // create form (owner_id, title, note)

        const values=[req.body.form_id, req.body.label, req.body.placeholder ,req.body.field_type]
        db.query(formQueries.CREATE_FORM_FIELD, [values], function (err, result) {
            if (err) return err;
            res.json(result)
            // console.log("Number of records inserted: " + result.affectedRows);
          });
    })
    app.get('/forms/form-fields/:id/get-detail', (req, res)=>{
        // view one form
        const id=req.params['id']
        db.query(formQueries.GET_ONE_FORM_FIELD,[id] , function (err, result) {
            if (err) return err;
            res.json(result[0])
            // console.log("Number of records inserted: " + result.affectedRows);
          });
    })
    
    app.delete('/forms/form-fields/:id', (req, res)=>{
        // delete form field
        const id=req.params['id']
        db.query(formQueries.DELETE_FORM_FIELD,[id],  function (err, result) {
            if (err) return err;
            res.json(result)
            // console.log("Number of records inserted: " + result.affectedRows);
          });
    })
}