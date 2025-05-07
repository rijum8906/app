const formatLoginData = (raw) => {
  const password = raw.password;
  const remember = raw.remember;
  if (raw.usernameOrEmail.indexOf("@") !== -1) {
    return {
      email: raw.usernameOrEmail,
      password,
    };
  } else {
    return {
      username: raw.usernameOrEmail,
      password,
      remember,
    };
  }
};


export const { formatLoginData };