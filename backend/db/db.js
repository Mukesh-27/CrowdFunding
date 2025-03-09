const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect("mongodb+srv://mukesh_27:Mukesh123@cluster0.fy1ek.mongodb.net/crowdfunding?retryWrites=true&w=majority&appName=crowdfunding");

// Add connection event handlers
mongoose.connection.on('connected', () => {
  console.log('MongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Creator Schema
const creatorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  location: {
    type: String
  },
  bio: {
    type: String
  },
  website: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'creator',
    required: true
  }
});

// Backer Schema
const backerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  location: {
    type: String
  },
  cardDetails: {
    cardNumber: {
      type: String,
      required: true
    },
    expiryDate: {
      type: String,
      required: true
    },
    cvv: {
      type: String,
      required: true
    }
  },
  billingAddress: {
    type: String,
    required: true
  },
  interests: {
    type: [String]
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'backer',
    required: true
  }
});

// Create models
const Creator = mongoose.model('Creator', creatorSchema);
const Backer = mongoose.model('Backer', backerSchema);

// Simplified getUserType function since we now have a type field
async function getUserType(email) {
  try {
    const creator = await Creator.findOne({ email });
    if (creator) return creator.type;
    
    const backer = await Backer.findOne({ email });
    if (backer) return backer.type;
    
    return null;
  } catch (error) {
    console.error('Error checking user type:', error);
    return null;
  }
}

module.exports = { Creator, Backer, getUserType };
