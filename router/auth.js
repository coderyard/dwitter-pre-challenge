import express from 'express';
import 'express-async-errors';
import {validate} from '../middleware/validator.js';
import {body} from 'express-validator';
import * as authController from '../controller/auth.js';

const router = express.Router();
// 그냥 유저의 정보를 유효성 검사하는 것과 가입 정보 유효성 검사를 구분한 이유
// -> 유저의 정보를 가져와서 로그인 할 때에는 이메일 정보가 필요 없으므로!
const validateLoginUser = [
  body('username').trim().isLength({min:3}).withMessage('Id is too short!'),
  body('password').trim().isLength({min:3}).withMessage('Password is too short!')
];

// user가 sign up 하기 위해 정보를 입력했을 때 적절한 정보가 들어왔는지 확인하기 위해!
const validateUserSignUpInfo = [
  body('email').trim()
  .isEmail().withMessage('Plz entered appropriate email format!')
  .isLength({min:10}).withMessage('too short or unproper')
]
router.get('/', authController.showUsersInfo);

router.post('/login', validateLoginUser, validate, authController.compUser);

router.post('/signup', validateLoginUser, validateUserSignUpInfo, validate, authController.signUp);


export default router;