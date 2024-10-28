import axios from "axios";

export const register = async (
  name,
  email,
  mobileNumber,
  password,
  profilePicture
) => {
  try {
    var formData = new FormData();
    formData.append("file", profilePicture);
    const profile = await axios.post(
      "http://localhost:8888/api/upload-image",
      formData
    );
    if (profile.statusText === "OK") {
      const user = await axios.post("http://localhost:8888/api/auth/register", {
        name,
        email,
        mobileNumber,
        password,
        profilePicture: profile.data,
      });

      if (user.statusText === "Created") return "Registed Successfully";
      return user.data;
    }
  } catch (e) {
    return "Error Creating Account";
  }
};

export const login = async (email, password) => {
  try {
    const user = await axios.post("http://localhost:8888/api/auth/login", {
      email,
      password,
    });
    if (user.statusText === "OK")
      return { status: "Login Successfully", token: user.data };
    return user.data;
  } catch (e) {
    return "Login Failed";
  }
};
