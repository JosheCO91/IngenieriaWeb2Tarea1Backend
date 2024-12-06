const jwt = require('jsonwebtoken');

const verificrTok = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ message: 'Token requerido.' });

  try {
    const decodif = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodif;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token incorrecto.' });
  }
};

const determinarRol = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.rol)) {
    return res.status(403).json({ message: 'Rol insuficiente.' });
  }
  next();
};

module.exports = { verificrTok, determinarRol };
