import { useState , useEffect } from "react";
import { ErrorHandler } from "./indexc";
type ErrorStatus = 401 | 500 | "network";

export default function App() {

const [errorStatus, setErrorStatus] = useState <ErrorStatus | null>(null);

useEffect(() => {
  fetch("/api/data")
    .then(res => {
      if (res.status >= 400 && res.status <= 499) setErrorStatus(401);
      else if (res.status >= 500 && res.status <= 599) setErrorStatus(500);
      else return res.json();
    })
    .catch(() => setErrorStatus("network"));
}, []);

return (
  <>
    {errorStatus 
    ? <ErrorHandler status={errorStatus}
     /> :
      <div>✅ البيانات شغالة</div>
     }
  </>
);
}