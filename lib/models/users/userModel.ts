import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema : mongoose.Schema = new Schema({
    name: {
        type: String,
        required: [true, "a name is required"],
        min: [1, "a name requires minimum 1 letter"] 
    },
    discordId: {
        type: String,
        requried: [true, "a discord name is required"],
        min: [6, "a discord id is guaranteed to be more than 6 characters"]
    },
    created: String
});
