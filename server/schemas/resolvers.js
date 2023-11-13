const { User, Car} = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addCar:async (parent, {carName, price, image },  context) => {
      try {
        const currentUser = await User.findById(context.user._id);

        // Create a new car object
        const newCar = {
          carName,
          price,
          image,
        };

        // Add the new car to the user's savedCar array
        currentUser.savedCar.push(newCar);

        // Save the updated user
        await currentUser.save();
        return currentUser;
      } catch (error) {
        console.error("error adding car", error);
        throw new Error ('could not add car')
      }
    },

  },
};

module.exports = resolvers;
