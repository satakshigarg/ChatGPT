import { IonIcon } from "@ionic/react";
import { informationCircleOutline, closeCircleOutline } from "ionicons/icons";
import { useAuth } from "../../store/store";
import { useState } from "react";
import { motion } from "framer-motion";
import { SignIn } from "@clerk/clerk-react";
import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"
import { dark } from "@clerk/themes";

const varinats = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.15 } },
};
const userNameLength = 6;

export default function UserName() {
  const [userName, setUserName] = useState("");
  const { setApiKey } = useAuth();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setApiKey(userName);
  }

  return (
    <motion.div
      variants={varinats}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="dark:bg-gray-700 text-gray-700 dark:text-gray-300 border bg-white border-blue-400 max-w-xl w-full p-3 rounded-md mx-2 md:mx-0"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div>
      <SignedOut >
        <SignIn />
      </SignedOut>
      </div>
      <SignedIn>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="flex flex-row w-full">
          <input
            type="text"
            placeholder="Enter your userID"
            onChange={(e) => setUserName(e.target.value)}
            autoFocus
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          />
          <button
            type="submit"
            disabled={userName.length < userNameLength}
            className="ml-2 mt-4 py-2.5 disabled:cursor-not-allowed disabled:bg-white px-5 text-sm font-medium disabled:text-gray-900 focus:outline-none bg-green-500 text-white rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Save
          </button>
        </div>
      </form>
      </SignedIn>
    </motion.div>
  );
  
}
