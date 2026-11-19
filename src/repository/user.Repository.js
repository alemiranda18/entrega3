import User from "../models/user.model.js";

export const userRepository = {

    getAll: () => {
        return User.find();
    },

    getByid: (id) => {
        return User.findById(id);
    },

    getById: (id) => {
        return User.findById(id);
    },

    getByEmail: (email) => {
        return User.findOne({ email });
    },

    create: (newUser) => {
        return User.create(newUser);
    },

    insertMany: (users) => {
        return User.insertMany(users);
    },

    update: (id, updates) => {
        return User.findByIdAndUpdate(id, updates, { new: true });
    },

    delete: (id) => {
        return User.findByIdAndDelete(id);
    }
}