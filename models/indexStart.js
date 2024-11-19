const dbConfig = require('../config/dbConfig')

const {Sequelize,DataTypes} =('sequelize')

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        // timezone: '+08:00',
        // logging: false,
        // pool:{
        //     max: 5,
        //     min: 0,
        //     acquire: 30000,
        //     idle: 10000
        // }
        operatorAliases: false //if errors in ua code will overwrite the errors using this line
    }
)

sequelize.authenicate()
.then(() => {
    console.log('connected to database')
})
.catch(err => {
    // console.log('error connecting to database', err)
    console.log('Error'+ err)
})

const db ={}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.student = require('./studentModel.js')(sequelize,DataTypes)
// db.teacher = require('./teacherModel.js')(sequelize,DataTypes)
// db.classroom = require('./classroomModel.js')(sequelize,DataTypes)
// db.subject = require('./subjectModel.js')(sequelize,DataTypes)
// db.attendance = require('./attendanceModel.js')(sequelize,DataTypes)
// db.attendanceRecord = require('./attendanceRecordModel.js')(sequelize,DataTypes)

db.sequelize.sync({force: false})
.then(()=>{
    console.log('re-sync done')
})

module.exports = db
