import mongoose from 'mongoose';

export default async function connectDB () {
    try {
        await mongoose.connect("mongodb+srv://root:root@mandatory.auf6w8b.mongodb.net/", {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log("MongoDB Connected");
    } catch (err) {
        console.log(err.message);
    }
};

