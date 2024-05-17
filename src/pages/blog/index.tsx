import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { fetchUser } from "@/utils/fetches";
import React, { useEffect, useState } from "react";
import HelloWorld from "./blogs/1.mdx";

function Blog() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(setUser);
  }, []);
  return (
    <main className="min-h-screen flex flex-col items-center ">
      <Navbar user={user} />
      <div className="mt-8 w-96 h-96 bg-red-200 ">
        <HelloWorld />
      </div>

      {/* <Footer /> */}
    </main>
  );
}

export default Blog;
