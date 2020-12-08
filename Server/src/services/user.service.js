const bcryptjs = require('bcryptjs');
const db = require('../models/index');
const logger = require('../shared/logger.js');
const CONSTANTS = require('../shared/constants');
const Op = require('Sequelize').Op;

const { User } = db.sequelize.models;
const { UserRole } = db.sequelize.models;
const { Skill, Profile } = db.sequelize.models;

const findUserByName = userName => {
  return User.findOne({
    where: { emailId: userName }
  });
};

const findUserById = userId => {
  return User.findOne({
    where: { id: userId },
    attributes: { exclude: ['userPassword', 'verificationCode'] }
  });
};

const findUserByIdWithPassword = userId => {
  return User.findOne({
    where: { id: userId }
  });
};

const findUserByIdWithRoles = async userId => {
  const user = await User.findOne({
    where: { id: userId },
    include: [{ model: UserRole, as: 'roles' }],
    attributes: { exclude: ['userPassword', 'verificationCode'] }
  });
  if (user) {
    // get roles as a simple array
    const userroles = [];
    for (let i = 0; i < user.roles.length; i += 1) {
      const userrole = user.roles[i];
      userroles.push(userrole.role);
    }
    const retUserObj = user.get({ plain: true });
    retUserObj.roles = userroles;
    return retUserObj;
  }
  return user;
};

const findUserByNameWithRoles = async userName => {
  console.log('======> ', userName)

  const user = await User.findOne({
    where: { emailId: userName },
    attributes: ['userName', 'id', 'emailId', 'userPassword', 'roleId'],
    include: [{ model: UserRole, as: 'roles' }]
  });

  return user;
};

const createUser = async reqBody => {

  const result = await User.create({
    emailId: reqBody.emailId,
    userPassword: reqBody.userPassword,
    roleId: reqBody.profileId
  });

  logger.debug(`result ${result}`);
  return result;
};

const updatePassword = async (newpassword, userId) => {
  console.log('in updated password: ', newpassword, userId)
  await User.update({ userPassword: newpassword }, { where: { id: userId } });
};

const createUserSkills = async (userId, skills) => {

  const result = await Skill.create({
    skills: skills,
    userId: userId
  });

  return result;
};

const createUserProfile = async (payload) => {
  const result = await Profile.create({
    user_id: payload.user_id,
    first_name: payload.first_name,
    last_name: payload.last_name,
    country_id: payload.country_id,
    state_id: payload.state_id,
    mobile_number: payload.mobile_number,
    skype_id: payload.skype_id,
    skill_id: payload.skill_id,
    experience: payload.experience,
    current_position: payload.current_position,
    portfolio_link: payload.portfolio_link,
    hours_per_week: payload.hours_per_week,
    resume_url: payload.resume_url,
    bio: payload.bio
  });

  return result;
};

const findFreelancers = async () => {
  const freelancers = await Profile.findAll({
    include: [{
      model: Skill,
      as: 'skill'
    }]
  });
  return freelancers;
}

const findFreelancersByQuery = async (keyword) => {
  return Skill.findAll({
    where: {
      // skills: {
      // 	[Op.like]: '%' + keyword + '%'
      // }
      [Op.or]: [
        { skillDescription: { [Op.like]: '%' + keyword + '%' } }
      ]
    }
  })

}

module.exports = {
  findUserByName,
  findUserById,
  findUserByIdWithPassword,
  findUserByNameWithRoles,
  findUserByIdWithRoles,
  createUser,
  updatePassword,
  createUserSkills,
  createUserProfile,
  findFreelancers,
  findFreelancersByQuery
};
