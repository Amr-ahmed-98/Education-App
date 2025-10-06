import Cookies from "js-cookie";
import { useEffect, useState } from "react";

interface CookieOptions {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
}

/**
 * Custom hook for managing cookies
 *  key - Cookie name
 *  defaultValue - Default value if cookie doesn't exist
 *  options - Cookie options (expires, path, etc.)
 * returns [value, setValue, removeCookie]
 */
function useCookie(
  key: string,
  defaultValue: string = "",
  options?: CookieOptions
): [string, (newValue: string) => void, () => void] {
  
  // Initialize state with cookie value or default
  const [value, setValue] = useState<string>(() => {
    const cookie = Cookies.get(key);
    return cookie || defaultValue;
  });

  // Update cookie when value changes
  useEffect(() => {
    if (value !== undefined) {
      Cookies.set(key, value, options);
    } else {
      Cookies.remove(key, { path: options?.path });
    }
  }, [key, value, options]);

  // Function to remove cookie
  const removeCookie = () => {
    Cookies.remove(key, { path: options?.path });
    setValue(defaultValue);
  };

  return [value, setValue, removeCookie];
}

export default useCookie;

// --- usage of this hook ---
// ---- this is just for reference ----
// ---- Simple usage example ----
// const [theme, setTheme, removeTheme] = useCookie('theme', 'light');
// ----- usage with options ----
/*

// const [token, setToken, removeToken] = useCookie('auth_token', '', {
//     expires: 7,       
//     secure: true,     
//     sameSite: 'strict',
//     path: '/'   
// });


*/

// ---- Options Can be -------
// expires: number | Date; // Expiration time in days or specific date
// path: string; // Path where the cookie is accessible
// domain: string; // Domain where the cookie is accessible
// secure: boolean; // Whether the cookie is only sent over HTTPS
// sameSite: 'strict' | 'lax' | 'none'; // SameSite attribute for CSRF protection