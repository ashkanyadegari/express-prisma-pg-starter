const auth = process.env.AUTH;

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (auth === token) {
    next();
  } else {
    res.status(401).json('Unauthorized');
  }
};
