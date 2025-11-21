// src/context/UserContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const DEFAULT_AVATAR_SEED = "Christopher";
  const [avatarSeed, setAvatarSeed] = useState(DEFAULT_AVATAR_SEED);

  useEffect(() => {
    // 1) Try localStorage (after you save from AccountPage)
    const stored = localStorage.getItem("avatarSeed");
    if (stored) {
      setAvatarSeed(stored);
      return;
    }

    // 2) Fallback: try fetching from backend once
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const res = await fetch("http://localhost:3000/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) return;

        const data = await res.json();

        // Adjust to your API shape – from your DB screenshot:
        // data.profile.profilePicture = "Oliver"
        const seedFromApi =
          data?.profile?.profilePicture ||
          data?.user?.profile?.profilePicture ||
          data?.user?.profilePicture ||
          data?.profilePicture;

        if (seedFromApi) {
          setAvatarSeed(seedFromApi);
          localStorage.setItem("avatarSeed", seedFromApi);
        }
      } catch (err) {
        console.error("UserProvider fetchProfile error:", err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <UserContext.Provider value={{ avatarSeed, setAvatarSeed }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
