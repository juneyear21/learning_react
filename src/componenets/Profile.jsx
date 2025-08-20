import { useState } from "react"

const Profile = () => {
  const [userProfile, setUserProfile] = useState({
    name: "",
    age: ""
  });

  // Input change handler for both fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Dynamically update the correct field
    setUserProfile({
      ...userProfile,
      [name]: value
    });
  };

  const handleSubmit = () => {
    alert(`Name: ${userProfile.name}, Age: ${userProfile.age}`);
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userProfile.name} | Age: {userProfile.age}</p>

      <label>
        <input
          name="name"
          placeholder="Enter your name"
          value={userProfile.name}
          onChange={handleChange}
        />
        <input
          name="age"
          placeholder="Enter your age"
          value={userProfile.age}
          onChange={handleChange}
        />
      </label>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Profile;
