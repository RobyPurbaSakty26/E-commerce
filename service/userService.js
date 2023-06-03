const userRepository = require("../repository/userRepository");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "Secret";

async function encryptPassword(str) {
  try {
    const hash = await bcrypt.hash(str, 10);
    return hash;
  } catch (err) {
    throw err;
  }
}

async function comparePassword(password, encryptedPassword) {
  try {
    const isValid = await bcrypt.compare(password, encryptedPassword);
    return isValid;
  } catch (err) {
    throw err;
  }
}

function createWebToken(payload) {
  return jwt.sign(payload, SECRET_KEY);
}

function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY);
}

function verifyEmail(Email) {
  const re =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!re.test(Email)) {
    const err = new Error("Format E-mail salah");
    throw err;
  }
}

module.exports = {
  verifyToken,
  encryptPassword,
  comparePassword,
  createWebToken,
  verifyEmail,

  async register(name, email, password) {
    try {
      const user = await userRepository.findUser({ email });

      if (user) {
        const err = new Error("Email has use");
        throw err;
      }

      const encryptedPasswod = await encryptPassword(password);

      const body = {
        name: name,
        email: email,
        password: encryptedPasswod,
      };

      return userRepository.create(body);
    } catch (err) {
      throw err;
    }
  },

  async login(email, password) {
    try {
      const isUser = await userRepository.findUser({ email });
      if (!isUser) {
        const err = new Error("Email had not register");
        throw err;
      }

      const { password: encryptedPassword } = isUser;

      const isAuthenticated = await comparePassword(
        password,
        encryptedPassword
      );
      if (!isAuthenticated) {
        const err = new Error("Password worng");
        throw err;
      }

      const token = createWebToken({
        id: isUser.id,
        email: isUser.email,
      });

      const data = {
        ...isUser.dataValues,
        token,
      };

      return data;
    } catch (err) {
      throw err;
    }
  },

  async getAll() {
    try {
      const data = await userRepository.getAll();
      const count = await userRepository.count();

      return {
        data,
        count,
      };
    } catch (err) {
      throw err;
    }
  },

  async authorize(token) {
    try {
      const payload = verifyToken(token);
      const id = payload?.id;
      const user = await userRepository.findUser(id);

      return user;
    } catch (err) {
      throw err;
    }
  },

  async update(id, body) {
    try {
      const Email = body.Email;
      if (Email) {
        const user = await userRepository.findUser({ Email });

        if (user) {
          const err = new Error("Email has been used");
          throw err;
        }
      }

      const userId = await userRepository.findByPk(id);

      newBody = {
        name: body.name || userId.name,
        email: body.email || userId.email,
        username: body.username || userId.username,
        address: body.address || userId.address,
        password: body.password || userId.password,
        sex: body.sex || userId.sex,
        foto: body.foto || userId.foto,
        noPhone: body.noPhone || userId.noPhone,
      };

      return userRepository.update(id, newBody);
    } catch (err) {
      throw err;
    }
  },

  delete(id) {
    return userRepository.delete(id);
  },

  getByPk(id) {
    return userRepository.getByPk(id);
  },
};
