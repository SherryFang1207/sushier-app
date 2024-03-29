"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  //   const { data: session, status } = useSession();

  //   if (status === "authenticated") {
  //     return <p>Signed in!</p>;
  //   }

  //   return <a href="/api/auth/signin">Sign in</a>;
  // }
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
