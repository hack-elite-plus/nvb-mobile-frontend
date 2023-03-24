import { createContext } from "react";
import { User, useUser } from "../hooks/useUser";

export const AuthContext = createContext<any>(null);

export function AuthContextProvider(props: any) {
  const [user, setUser] = useUser();
  return <AuthContext.Provider value={{ user, setUser }}>{props.children}</AuthContext.Provider>;
}
