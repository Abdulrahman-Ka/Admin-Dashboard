import { AuthProvider } from "react-admin";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";

export const authProvider: AuthProvider = {
  login: ({ username, password }) => {
    // const request = new Request()
    if (username !== 'Amr' || password !== '123') return Promise.reject();
    localStorage.setItem("username", username);
    return Promise.resolve();
  },
  logout: () => {
    localStorage.removeItem("username");
    return Promise.resolve();
  },
  checkError: ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  },
  getPermissions: () => Promise.resolve(),
};

export default authProvider;
