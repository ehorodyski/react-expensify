import { firebase, googleAuthProvider } from '../../firebase/firebase';

export const login = () => {
  return (dispatch) => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => {
  return (dispatch) => {
    return firebase.auth().signOut();
  };
};