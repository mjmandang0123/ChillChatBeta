import { ChatBox } from "../components/chat-box";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseconfig";
import Link from "next/link";
import Login from "../components/Login";
import { useRouter } from "next/router";

 

function Home() {
  return (
    <div className="wrapper">
      <section>
        <button onClick={() => signOut(auth)}>
          Logout
        </button>
        <h1>ChillChat</h1>
        <p>
          
        </p>
      </section>
      <section>
        <ChatBox />
      </section>
    </div>
  );
}

export default Home;
