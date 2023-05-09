import { useState } from "react";
import { auth } from "../firebaseConfig/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sighIn = async () => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err)
    }
  };

  return (
    <div className="login-contain">
      <input placeholder="Email..." onChange={e => setEmail(e.target.value)} />
      <input
        placeholder="Password..."
        type="password"
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={sighIn}>Sign in</button>
    </div>
  );
}
