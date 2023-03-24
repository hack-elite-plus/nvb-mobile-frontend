import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";

export interface User {
  email: string;
  authToken?: string;
}

type useUserType = [User | null, (user: User) => Promise<void>];

export function useUser(): useUserType {
  const [user, _setUser] = useState<User | null>(null);

  useEffect(() => {
    initialUser();

    async function initialUser() {
      const user = await SecureStore.getItemAsync("user");
      _setUser(JSON.parse(user || '{}'));
    }
  }, []);

  const setUser = async (user: User) => {
    setUser(user);
    return await SecureStore.setItemAsync("user", JSON.stringify(user));
  };

  return [user, setUser];
}
