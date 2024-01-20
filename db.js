const { db, Table } = require("./db.config");

//create or update users
const createOrUpdate = async(data = {}) => {
    const params = {
        TableName: Table,
        Item: data
    }
    try{
        await db.put(params).promise()
        return { success: true }
    } catch(error){
        return {success: false}
    }
}

// Read all users
const readAllUsers = async () => {
    const params = {
        TableName: Table
    }

    try {
        const { Items = [] } = await db.scan(params).promise()
        return { success: true, data: Items }
    } catch (error) {
        return { success: false, data: null }
    }
}


module.exports = {createOrUpdate, readAllUsers};