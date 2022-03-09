import bcrypt from 'bcrypt';
import jwb from 'jsonwebtoken';

let users = [
  {
    "username":"ellie",
    "password":"12345",
    "name":"ellie",
    "email":"ellie@gmail.com",
    "url":"https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
  {
    "username":"yard",
    "password":"12345",
    "name":"yard",
    "email":"wskyard96@gmail.com",
    "url":"https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  }
]

export async function getUser(username, password) {
  const user = users.find(user => (user.username === username && user.password === password));
  return user;
}

export async function getAllUsers(){
  return users;
}

export async function createUser(username, password, name, email, url){
  const newUser = {
    username,
    password,
    name,
    email,
    url,
  }

  users = [newUser, ...users];
  return newUser;
}