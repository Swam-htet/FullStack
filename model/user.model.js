let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let UserSchema = new Schema({
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        userName: {
            type: String,
            unique: true,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true
        },
        dateOfBirth: {
            type: Date,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
)
module.exports = mongoose.model("User",UserSchema);

/*

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZGQxYzgwNjljMmU0YWU4YjdhMjIyZSIsImlhdCI6MTY5MjIxMjM1Mn0.FI-NvKskxjk8qaJi0nHrPrEXZqH9zgKIL_reNJOXmLE"
}

{"alg":"HS256","typ":"JWT"}
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

{"id":"64dd1c8069c2e4ae8b7a222e","iat":1692212352}
eyJpZCI6IjY0ZGQxYzgwNjljMmU0YWU4YjdhMjIyZSIsImlhdCI6MTY5MjIxMjM1Mn0K


$9<bq>f/4

 */