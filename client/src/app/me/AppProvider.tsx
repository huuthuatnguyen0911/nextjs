"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext({
  sessionToken: "",
  setSessionToken: (token: string) => {},
});

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};

export default function AppProvider({
  children,
  initSessionToken = "",
}: {
  children: React.ReactNode;
  initSessionToken?: string;
}) {
  const [sessionToken, setSessionToken] = useState(initSessionToken);
  return (
    <AppContext.Provider value={{ sessionToken, setSessionToken }}>
      {children}
    </AppContext.Provider>
  );
}
