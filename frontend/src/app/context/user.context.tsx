"use client";

import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { apiUrl } from "@/utils/util";

interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phonenumber: string;
  role: string;
}

interface IUserContext {
  user: IUser | null;
  fetchUserData: () => void;
  setToken: Dispatch<SetStateAction<string | null>>;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  signOut: () => Promise<void>;
}

const defaultContextValue: IUserContext = {
  user: null,
  fetchUserData: () => {},
  setToken: () => {},
  setUser: () => {},
  signOut: async () => {},
};

export const UserContext = createContext<IUserContext>(defaultContextValue);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<IUser | null>(null);
  const router = useRouter();
  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        ("No token found");
        return;
      }

      const res = await axios.get(`${apiUrl}/api/v1/auth/currentuser`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        setUser(res.data.user);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);

      localStorage.removeItem("token");
      setToken(null);
      setUser(null);
    }
  };

  const signOut = async () => {
    await localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    toast.success("Хэрэглэгч та системээс амжилттай гарлаа", {
      autoClose: 1000,
    });
    router.push("/");
  };
  useEffect(() => {
    if (token) {
      fetchUserData();
    } else {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }
  }, [token]);

  return (
    <UserContext.Provider
      value={{ user, fetchUserData, setToken, setUser, signOut }}
    >
      {children}
    </UserContext.Provider>
  );
};
