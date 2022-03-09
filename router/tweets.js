import express from 'express';
import 'express-async-errors';
import {body, param, validationResult, check} from 'express-validator';
import * as tweetsController from '../controller/tweets.js';
import {validate} from '../middleware/validator.js';
// 유효성 검사!


const router = express.Router();
// get tweets
// get tweets?username=:username
router.get('/',
[
  param('username').trim().isLength({min:2, max:10}).withMessage('길이를 맞춰줘!'), 
  validate,
],
tweetsController.getTweets);
// get tweets/:id
router.get('/:id',
[
  param('id').trim().isInt().withMessage('숫자를 입력해!'),
  validate,
],
tweetsController.getTweet);
// post /tweets
router.post('/',
[
  body('id').trim().isInt().withMessage('숫자를 입력해!'),
  body('text').rtrim().isLength({max:100}).withMessage('too long!'),
  body('name').trim().isString('문자를 입력해줘!').isLength({min:2, max:10}).withMessage('길이를 맞춰줘!'),
  validate,
],
tweetsController.createTweet);
// put /tweets/:id
router.put('/:id', 
[
  body('id').trim().isInt().withMessage('숫자를 입력해!'),
  validate,
],
tweetsController.updateTweet);
// delete /tweets/:id
router.delete('/:id',
[
  body('id').trim().isInt().withMessage('숫자를 입력해!'),
  validate,
],
tweetsController.deleteTweet);

export default router;