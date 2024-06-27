const User = require("./models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();

const usersData = [
    {
        username: "rajkumar",
        firstName: "rajkumar",
        lastName: "paneru",
        email: "rajkumarpaneru111@gmail.com",
    },
    {
        username: "sarojp",
        firstName: "saroj",
        lastName: "paneru",
        email: "sarojpaneru094@gmail.com",
    },
    {
        username: "rajaram",
        firstName: "rajaram",
        lastName: "paneru",
        email: "panerurajaram0@gmail.com",
    },
];

async function populateData() {
    try {
        // Connect to the MongoDB database
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        // Hash the password "Test@123"
        const hashedPassword = await bcrypt.hash("Test@123", 10);

        // Loop through the usersData array and save each user to the database
        for (const userData of usersData) {
            const user = new User({
                ...userData,
                password: hashedPassword,
            });
            await user.save();
        }

        console.log("Users have been populated successfully.");
        mongoose.connection.close();
    } catch (error) {
        console.error("Error populating users:", error);
        mongoose.connection.close();
    }
}

populateData();