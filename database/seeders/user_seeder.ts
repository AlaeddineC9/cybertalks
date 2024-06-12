import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        "fullName": "User 1",
        "email": "user1@example.com",
        "password": "hashed_password_here",
      
      },
      {
        "fullName": "User 2",
        "email": "user2@example.com",
        "password": "hashed_password_here",
      
      },
      {
        "fullName": "User 3",
        "email": "user3@example.com",
        "password": "hashed_password_here",
      
      },
      {
        "fullName": "User 4",
        "email": "user4@example.com",
        "password": "hashed_password_here",
      
      },
      {
        "fullName": "User 5",
        "email": "user5@example.com",
        "password": "hashed_password_here",
      
      },
      {
        "fullName": "User 6",
        "email": "user6@example.com",
        "password": "hashed_password_here",
      
      },
      {
        "fullName": "User 7",
        "email": "user7@example.com",
        "password": "hashed_password_here",
      
      },
      {
        "fullName": "User 8",
        "email": "user8@example.com",
        "password": "hashed_password_here",
      
      },
      {
        "fullName": "User 9",
        "email": "user9@example.com",
        "password": "hashed_password_here",
      
      },
      {

        "fullName": "User 10",
        "email": "user10@example.com",
        "password": "hashed_password_here",
      
      },

    ])
  }
}