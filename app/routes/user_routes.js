const userQueries=require('../db/userQueries')

module.exports=function(app, db){
    app.post('/users', (req, res)=>{
        // create form (full_name, phone_number, email)
        const values=[req.body.full_name,req.body.phone_number,req.body.email]
        db.query(userQueries.CREATE_USER, [values], function (err, result) {
            if (err) throw err;
            res.json(result)
            // console.log("Number of records inserted: " + result.affectedRows);
          });
    })
    
    app.get('/users', (req, res)=>{
        // view all users
        db.query(userQueries.GET_ALL_USERS,  function (err, result) {
            if (err) throw err;
            res.json(result)
            // console.log("Number of records inserted: " + result.affectedRows);
          });
    })

    app.get('/users/:id', (req, res)=>{
        // view one user
        const id=req.params['id']
        db.query(userQueries.GET_ONE_USER,[id] , function (err, result) {
            if (err) throw err;
            res.json(result)
            // console.log("Number of records inserted: " + result.affectedRows);
          });
    })

    app.put('/users/:id', (req, res)=>{
        // create form (full_name, phone_number, email)
        // const values=[req.body.full_name,req.body.phone_number,req.body.email]

        db.query(userQueries.UPDATE_ONE_USER,[req.body, req.params], function (err, result) {
            if (err) throw err;
            res.json(result)
            // console.log("Number of records inserted: " + result.affectedRows);
          });
    })
}