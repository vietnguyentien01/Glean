import { useState } from "react";
import { auth } from "../../firebaseConfig/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sighIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  return <div>
      <input placeholder="Name..." onChange={e => setName(e.target.value)} />
      <input placeholder="Email..." onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password..." onChange={e => setPassword(e.target.value)} />
      <input placeholder="Confirm password..." type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={sighIn}>Sign in</button>
    </div>;
}
