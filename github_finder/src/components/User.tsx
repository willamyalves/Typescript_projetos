// Axios
import axios from "axios";

// React
import { useState, useEffect } from "react";

// Css
import "./User.css";

const User = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(
          "https://api.github.com/users/matheusbattisti"
        );

        const objectData = {
          image: data.data.avatar_url,
          login: data.data.login,
          followers: data.data.followers,
          following: data.data.following,
          location: data.data.location,
        };

        setUser(objectData);

        console.log;
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="user">
      <h1>User</h1>
    </div>
  );
};

export default User;
