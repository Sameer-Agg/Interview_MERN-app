const {Inngest} = require('inngest');
const connectdb = require('./db.js');
const ENV = require('./env.js');
const User = require('../models/User.model.js');

const inngest = new Inngest({id:"talent-iq"});

const syncUser = inngest.createFunction(
    {id:"sync-user"},
    {event:"clerk/user.created"},
    async ({event})=>{
        await connectdb();
        const {id,email_addresses,first_name,last_name,image_url} = event.data;

        const newuser = {
            clerkID:id,
            email:email_addresses[0]?.email_address,
            name:`${first_name || ""} ${last_name} || "`,
            profileImg:image_url,
        }

       await User.create(newuser);


    }
)


const deleteUser = inngest.createFunction(
    {id:"delete-user"},
    {event:"clerk/user.deleted"},
    async ({event})=>{
        await connectdb();
        const {id} = event.data;

        await User.deleteOne({clerkID:id});

    }
)

const functions = [syncUser,deleteUser]


module.exports = {functions , deleteUser};