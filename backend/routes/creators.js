const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Creator}=require("../db/db")
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../config/.env') });


// Creator signup route
router.post("/signup", async (req, res) => {
    try {
        const { fullName, username, email, location, bio, website, password, confirmPassword } = req.body;
        
        // Validate required fields
        if (!fullName || !username || !email || !password || !confirmPassword) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        
        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }
        
        // Check if username or email already exists
        const existingCreator = await Creator.findOne({
            $or: [{ username }, { email }]
        });
        
        if (existingCreator) {
            if (existingCreator.username === username) {
                return res.status(400).json({ error: "Username already taken" });
            }
            if (existingCreator.email === email) {
                return res.status(400).json({ error: "Email already registered" });
            }
        }
        
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // Create new creator
        const newCreator = new Creator({
            fullName,
            username,
            email,
            location,
            bio,
            website,
            password: hashedPassword
        });
        
        await newCreator.save();
        
        res.status(201).json({ 
            message: "Creator account created successfully",
            creator: {
                id: newCreator._id,
                fullName: newCreator.fullName,
                username: newCreator.username,
                email: newCreator.email
            }
        });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ error: "Server error" });
    }
});

// Creator signin route
router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Validate required fields
        if (!email || !password) {
            return res.status(400).json({ error: "Please provide both email (username or email) and password" });
        }
        
        // Find creator by username or email
        const creator = await Creator.findOne({
            $or: [{ username: email }, { email: email }]
        });
        
        if (!creator) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        
        // Verify password
        const isPasswordValid = await bcrypt.compare(password, creator.password);
        
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        
        // Generate JWT token
        const token = jwt.sign(
            { 
                id: creator._id,
                username: creator.username,
                type: creator.type  // Add this line
            }, 
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );
        
        res.status(200).json({
            message: "Signin successful",
            token,
            creator: {
                id: creator._id,
                fullName: creator.fullName,
                username: creator.username,
                email: creator.email
            }
        });
    } catch (error) {
        console.error("Signin error:", error);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
