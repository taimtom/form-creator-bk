const formRoutes=require('./form_routes')
const userRoutes=require('./user_routes')
const responseRoutes=require('./response_routes')


module.exports=function(app, db){
    formRoutes(app,db);
    userRoutes(app,db);
    responseRoutes(app,db);
}