const RandExp = require('randexp');
const bcryptjs = require('bcryptjs');
const InfoResponse = require('../shared/inforesponse');
const CONSTANTS = require('../shared/constants');
const logger = require('../shared/logger.js');
const nodemailer = require('../shared/nodemailer');
const userValidator = require('../validators/user.validator');
const userService = require('../services/user.service');
const authService = require('../shared/auth.service');

const forgetPassword = async (req, res) => {
  let infoResponse;
  try {
    await userValidator.validateUsername(req.body);
  } catch (valerr) {
    infoResponse = new InfoResponse(res.translate('common.input.validation.error') + valerr.message);
    res.status(CONSTANTS.HTTP_STATUS_BAD_REQUEST).json(infoResponse);
    return;
  }
  const user = await userService.findUserByName(req.body.userName);
  if (!user) {
    infoResponse = new InfoResponse(res.translate('user.notfound'));
    res.status(CONSTANTS.HTTP_STATUS_BAD_REQUEST).json(infoResponse);
    return;
  }

  const randexp = new RandExp(/[A-Z]{1}[a-z]{3}[@#]{1}[0-9]{3}/);
  const newpwd = randexp.gen();
  const hashedPassword = await bcryptjs.hash(newpwd, CONSTANTS.BCRYPT_SALTROUNDS);
  await userService.updatePassword(hashedPassword, user.id);

  const params = {
    userName: user.emailId,
    newpwd,
    appUrl: process.env.APP_URL
  };

  console.log('sending params nodemailer: ', params);

  await nodemailer(user.emailId, 'forgetpwd', params);
  infoResponse = new InfoResponse(res.translate('forget-password.save.success'));
  res.status(CONSTANTS.HTTP_STATUS_OK).json(infoResponse);
};

const authenticateUser = async (req, res) => {
  let infoResponse;
  let status;

  const user = await userService.findUserByNameWithRoles(req.body.userName);

  if (!user) {
    status = CONSTANTS.HTTP_STATUS_UNAUTHORIZED;
    infoResponse = new InfoResponse(res.translate('login.bad.credentials'));
    res.status(status).json(infoResponse);
    return;
  }
  console.log(`Authenticate user: JSON`, user.userPassword);

  // match the password
  // const match = await bcryptjs.compare(req.body.userPassword, user.userPassword);

  const match = (req.body.password === user.userPassword) ? true : false;

  if (!match) {
    status = CONSTANTS.HTTP_STATUS_UNAUTHORIZED;
    infoResponse = new InfoResponse(res.translate('login.bad.credentials'));
    res.status(status).json(infoResponse);
    return;
  }
  // // check if user is verified
  // if (user.accountLocked) {
  //   status = CONSTANTS.HTTP_STATUS_UNAUTHORIZED;
  //   infoResponse = new InfoResponse(res.translate('user.notverified'));
  //   res.status(status).json(infoResponse);
  //   return;
  // }

  const payload = { userId: user.id, userName: user.userName, roles: user.roles };
  const jwtToken = authService.generateAuthToken(payload);

  infoResponse = new InfoResponse(res.translate('login.sucess'));

  const resUserObj = {};
  resUserObj.id = user.id;
  resUserObj.userName = user.userName;
  // resUserObj.givenName = user.givenName;
  resUserObj.roles = user.roles;
  // resUserObj.profileImage = user.profileImage;

  infoResponse.result = resUserObj;

  res.setHeader(CONSTANTS.JWT_HEADER_STRING, `${CONSTANTS.JWT_TOKEN_PREFIX} ${jwtToken}`);
  res.status(CONSTANTS.HTTP_STATUS_OK).json(infoResponse);
};

const changePassword = async (req, res) => {
  let infoResponse;
  try {
    await userValidator.validateChangePassword(req.body);
  } catch (valerr) {
    infoResponse = new InfoResponse(res.translate('common.input.validation.error') + valerr.message);
    res.status(CONSTANTS.HTTP_STATUS_BAD_REQUEST).json(infoResponse);
    return;
  }
  // here it is assumed that user is in authObj
  const user = await userService.findUserByIdWithPassword(res.locals.authObj.userId);
  if (!user) {
    infoResponse = new InfoResponse(res.translate('user.notfound'));
    res.status(CONSTANTS.HTTP_STATUS_BAD_REQUEST).json(infoResponse);
    return;
  }
  const match = await bcryptjs.compare(req.body.oldPassword, user.userPassword);
  if (!match) {
    infoResponse = new InfoResponse(res.translate('change-password.password.mismatch'));
    res.status(CONSTANTS.HTTP_STATUS_BAD_REQUEST).json(infoResponse);
    return;
  }
  // check for confirmed password
  if (req.body.newPassword.trim() !== req.body.confirmPassword.trim()) {
    infoResponse = new InfoResponse(res.translate('change-password.newpassword.cnfpassword.mismatch'));
    res.status(CONSTANTS.HTTP_STATUS_BAD_REQUEST).json(infoResponse);
    return;
  }

  const hashedPassword = await bcryptjs.hash(req.body.newPassword, CONSTANTS.BCRYPT_SALTROUNDS);
  await userService.updatePassword(hashedPassword, user.id);
  infoResponse = new InfoResponse(res.translate('change-password.save.success'));
  res.status(CONSTANTS.HTTP_STATUS_OK).json(infoResponse);
};

const getUser = async (req, res) => {
  const user = await userService.findUserByIdWithRoles(req.params.userId);
  if (!user) {
    const infoResponse = new InfoResponse(res.translate('user.notfound'));
    res.status(CONSTANTS.HTTP_STATUS_BAD_REQUEST).json(infoResponse);
    return;
  }
  res.status(CONSTANTS.HTTP_STATUS_OK).json(user);
};

const forgetUserPassword = async (req, res) => {
  const payload = {};

  payload.emailId = req.body.emailId;
  payload.newPassword = req.body.newPassword;
  payload.confirmPassword = req.body.confirmPassword;

  try {
    await userValidator.validateForgetPassword(payload);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }

  const user = await userService.findUserByName(payload.emailId);

  if (!user) {
    infoResponse = new InfoResponse(res.translate('user.notfound'));
    return res.status(CONSTANTS.HTTP_STATUS_BAD_REQUEST).json(infoResponse);
  }

  const result = await userService.updatePassword(payload.confirmPassword, user.id);
  return res.status(200).json({
    message: 'Password changed succcessfully',
    data: result
  })
}

const createUser = async (req, res) => {
  const payload = {};
  let result;

  payload.emailId = req.body.emailId;
  payload.userPassword = req.body.userPassword;
  payload.confirmPassword = req.body.confirmPassword;
  payload.profileId = req.body.profileId;

  try {
    await userValidator.validateCreateUser(payload);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    })
  }

  const isPresent = await userService.findUserByName(payload.emailId);

  if (isPresent) {
    return res.status(CONSTANTS.HTTP_STATUS_BAD_REQUEST).json({
      message: 'User already registered with given email address! Please try another.'
    });
  }

  try {
    result = await userService.createUser(payload);
  } catch (error) {
    return res.status(CONSTANTS.HTTP_STATUS_BAD_REQUEST).json({
      message: error.message
    });
  }

  return res.status(CONSTANTS.HTTP_STATUS_BAD_REQUEST).json({
    message: 'User created.',
    userId: result.id
  });
}

const createProfile = async (req, res) => {
  const payload = {};

  payload.userId = req.body.id;
  payload.first_name = req.body.first_name;
  payload.last_name = req.body.last_name;
  payload.country_id = req.body.country_id;
  payload.state_id = req.body.state_id;
  payload.mobile_number = req.body.mobile_number;
  payload.skype_id = req.body.skype_id;
  payload.skills = req.body.skills;

  payload.experience = req.body.experience;
  payload.current_position = req.body.current_position;
  payload.portfolio_link = req.body.portfolio_link;
  payload.hours_per_week = req.body.hours_per_week;

  payload.resume_url = req.body.resume_url;
  payload.bio = req.body.bio;

  try {

  } catch (error) {

  }

  try {
    const skill = await userService.createUserSkills(payload.userId, payload.skills);
    delete payload.skills;
    payload.skill_id = skill.id;
    payload.user_id = payload.userId
    console.log(skill.id)
    const profile = await userService.createUserProfile(payload);

    return res.status(200).json(profile);

  } catch (error) {
    return res.status(500).json(error.message);
  }
}

const findFreelancers = async (req, res) => {
  const freelancers = await userService.findFreelancers();
  return res.status(200).json(freelancers);
}

const findFreelancersByQuery = async (req, res) => {
  const freelancers = await userService.findFreelancersByQuery(req.query.keyword);

  return res.status(200).json(freelancers);
}

module.exports = {
  forgetPassword,
  authenticateUser,
  changePassword,
  getUser,
  forgetUserPassword,
  createUser,
  createProfile,
  findFreelancers,
  findFreelancersByQuery
};
