import * as userRepository from '../data/users.js';
import bcrypt from 'bcrypt';
import jwb from 'jsonwebtoken';

export async function compUser(req, res, next){
  const username = req.body.username;
  const password = req.body.password;

  const infos = await userRepository.getUser(username, password);
  if (infos) {
    res.status(200).json({message: `Hi ${username}!! welcome`});
  }
  else{
    res.status(404).json({message:`id or passward went wrong! `});
  }
}

export async function showUsersInfo(req, res){
  const users = await userRepository.getAllUsers();
  return res.status(200).json(users);
}

export async function signUp(req, res){
  const newUser = await userRepository.createUser(req.body);

  if (newUser) {
    res.status(200).json(newUser);
  }
  else{
    res.status(400).json({message : 'Errored input is entered!'});

  }
}