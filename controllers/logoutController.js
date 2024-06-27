exports.userLogout = (req, res) => {
  res.clearCookie("token");
  return res.json("success");
};
