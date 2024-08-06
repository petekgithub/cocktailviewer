import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import { useState } from "react";
import styles from "@/styles/login.module.scss";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy user credentials
    if (username === "admin" && password === "password") {
      setCookie("authToken", "dummyToken", { maxAge: 3600 }); // Cookie'yi ayarla
      router.push("/saved-cocktails"); // Yönlendirme
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
