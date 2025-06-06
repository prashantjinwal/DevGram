import User from "../models/login.models.js";

const generateUsername = async (email) => {
  let localPart = email.split("@")[0];
  let baseUsername = localPart.slice(0, 10);
  let username = baseUsername;

  let isTaken = await User.exists({ 'profile.username': username });

  while (isTaken) {
    const trimmed = baseUsername.slice(0, -2); // <- trim from baseUsername, not already-trimmed
    const randomDigits = Math.floor(10 + Math.random() * 90); // 2-digit random number
    username = trimmed + randomDigits;

    isTaken = await User.exists({ 'profile.username': username });
  }

  return username;
};

export default generateUsername;
