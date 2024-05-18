<<<<<<< HEAD
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { fetchUser } from "@/utils/fetches";
import React, { useEffect, useState } from "react";
import HelloWorld from "./blogs/1.mdx";
=======
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { fetchUser } from '@/utils/fetches';
import React, { useEffect, useState } from 'react';
>>>>>>> 86e1ab788eb32e2642983d6b4c12b7204b940f27

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
}

const BlogIndex = ({ posts }: { posts: BlogPost[] }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(setUser);
  }, []);
<<<<<<< HEAD
  return (
    <main className="min-h-screen flex flex-col items-center ">
      <Navbar user={user} />
      <div className="mt-8 w-96 h-96 bg-red-200 ">
        <HelloWorld />
      </div>
=======
>>>>>>> 86e1ab788eb32e2642983d6b4c12b7204b940f27

  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-900">
      <Navbar user={user} />
      <div className="w-full p-6">
        <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug} className="bg-black p-4 rounded shadow">
              <Link href={`/blog/${post.slug}`}>
                <p className="text-2xl font-semibold">{post.title}</p>
              </Link>
              <p className="text-gray-600">{post.description}</p>
              <p className="text-gray-400 text-sm">{post.date}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export const getStaticProps = async () => {
  const blogsDirectory = path.join(process.cwd(), 'src', 'blogs');
  const files = fs.readdirSync(blogsDirectory);

  const posts = files.map((filename) => {
    const filePath = path.join(blogsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace('.mdx', ''),
      title: data.title,
      description: data.description,
      date: data.date,
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default BlogIndex;
