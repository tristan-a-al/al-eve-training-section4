'use strict';
let usersPath = './data/users.json'

export type USER ={
    email:string,
    password:string
}

/* It's a class that emulates a database, it has a private array of users, and it has methods to add
users, get all users, and find a user by email. */
class dbEmulator{
    private fs = require("fs")

    private users:USER[] = []

    constructor(){}

    async open(){
        let data = this.fs.readFileSync(usersPath, 'utf8')
        this.users = JSON.parse(data)
    }

    getAll(){
        return this.users
    }

    async insertOne(user:USER){
            // let existing = await this.findOne(user?.email)
            // if(existing) throw new Error("User Already Exists")
            this.users.push(user)
            await this.syncToFile()  
    }

    async close(){
        await this.syncToFile()
    }

    private async syncToFile(){
        try{

            let usersString = JSON.stringify(this.users)
            this.fs.writeFileSync(usersPath,usersString)

        }catch(err){
            console.error(err)
        }
    }

    private doesExist(email:string){

        return this.users.findIndex(user=>user?.email === email) >= 0

    }

    async findOne(email:string){
        try{

            if(this.doesExist(email)) return this.users.find(user=>user?.email === email)
            return null
            
        }catch(err){
            console.error(err)
        }
    }

}

/**
 * It returns an object with a function that returns a new instance of the dbEmulator class.
 * @returns An object with a function that returns a new instance of the dbEmulator class.
 */
export async function connectToUsers(){
    try{

        return {
            db: ():dbEmulator=> new dbEmulator
        }
        
    }catch(err){
        console.error(err)
    }
}