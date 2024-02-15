//  import { verify } from 'jsonwebtoken';
import { UNAUTHORIZED } from '../constants/httpStatus.js';
import pkg from 'jsonwebtoken';
const { verify } = pkg;

export default (req, res, next) => {
  const token = req.headers.access_token;
  if (!token) return res.status(UNAUTHORIZED).send();

  try {
    const decoded = verify(token, "Aljhjfgoinvvlvfv4832484vvvdfv8fvv5f8vfv9d");
    req.user = decoded;
  } catch (error) {
    res.status(UNAUTHORIZED).send();
  }

  return next();
};