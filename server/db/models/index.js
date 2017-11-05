import DB from '../_db'
import User from './User'
import Todo from './Todo'


//###############   Associations   ################//
//*************************************************//
User.hasMany(Todo)
Todo.belongsTo(User)




//#################################################//
//*************************************************//


export { DB, User, Todo }