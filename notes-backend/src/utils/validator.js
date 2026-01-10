const validator = require("validator");

module.exports = (data) => {
  const required = ["name", "email", "password"];
  const ok = required.every(k => data[k]);
  if (!ok) throw new Error("Missing Fields");

  if (!validator.isEmail(data.email)) {
    throw new Error("Invalid Email");
  }
};
