import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../appwriteConfig";

const StateContext = createContext();

const initialState = {
  userProfile: false,
};

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const [screenSize, setScreenSize] = useState(undefined);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  useEffect(() => {
    setLoading(false)
    checkUserStatus();
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);

    console.log('userInfo', userInfo)
    try {
      let response = await account.createEmailPasswordSession(userInfo.email, userInfo.password);
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      console.error(error);
    }
    setLoading(false)
  };

  const logoutUser = async () => {
    await account.deleteSession('current');
    setUser(null)
  }

  const checkUserStatus = async () => {
    try {
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    logoutUser() // Call the logout function on component mount
  }, []);

  return (
    <StateContext.Provider
      value={{
        user,
        loginUser,
        logoutUser,
        screenSize,
        setScreenSize,
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
      }}
    >
      {loading ? <div className="p-4"><p>Loading...</p></div> : children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

export default StateContext;
