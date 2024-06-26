"use client";
import { redirect } from "next/navigation";
import { auth } from "@/lib/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";

import UserMenu from "@/components/userMenu/UserMenu";

const Home = () => {
  const [user, loading] = useAuthState(auth);

  if (typeof window !== "undefined") {
    if (!user && !sessionStorage.getItem("user")) return redirect("/login");
  }

  if (loading) return <p>Checking...</p>;

  return (
    <>
      <Navbar className="text-black bg-yellow-400">
        <NavbarContent className="hidden gap-4 sm:flex" justify="end">
          <NavbarItem>
            <UserMenu />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <main className="bg-black flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-5xl font-semibold text-yellow-400">Welcome to your Profile</h1>
      </main>
    </>
  );
};

export default Home;
