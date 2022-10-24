import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './base';

export const signingUp = async (firstName, lastName, email, password) => {
  try {
    const userClient = await createUserWithEmailAndPassword(
      auth,
      firstName,
      lastName,
      email,
      password,
    );
    return userClient.user;
  } catch (error) {
    console.log(error);
    return error;
  }
};
