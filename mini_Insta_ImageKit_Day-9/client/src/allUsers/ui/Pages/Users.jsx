
import React, { useEffect, useState } from "react";
import {
  Compass,
  Search,
  ImagePlus,
  Sparkles,
  RefreshCw,
  Plus,
} from "lucide-react";

import { axiosInstance } from "../../../config/axiosInstance";
import PostCard from "../components/PostCard";
import { useNavigate } from "react-router";

const Users = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const getAllUsers = async () => {
    try {
      setError(false);
      const res = await axiosInstance.get("/MiniInsta/getAll");
      return res.data.posts;
    } catch (error) {
      console.log(error);
      setError(true);
      return [];
    }
  };

  const fetchPosts = async () => {
    setLoading(true);
    const posts = await getAllUsers();
    setData(posts || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-[#101010] text-white">

      {/* Top Navigation */}
      <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#101010]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black">
              <ImagePlus size={20} />
            </div>

            <div>
              <h1 className="text-lg font-semibold tracking-tight">
                mini<span className="font-light text-gray-500">insta.</span>
              </h1>
              <p className="text-[9px] uppercase tracking-[0.25em] text-gray-600">
                Discover moments
              </p>
            </div>
          </div>
          {/* Create Post + Explore */}
          <div className="flex items-center gap-4">

            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-xs font-medium text-black transition hover:bg-gray-200"
            >
              <Plus size={16} />
              Create Post
            </button>

            <div className="flex items-center gap-2 text-gray-400">
              <Sparkles size={17} />
              <span className="hidden text-xs sm:block">Explore</span>
            </div>

          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12">

        {/* Page Heading */}
        <section className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Compass size={15} className="text-gray-500" />
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
                Explore community
              </p>
            </div>

            <h2 className="text-4xl font-light tracking-tight sm:text-5xl">
              Discover <span className="italic text-gray-500">stories.</span>
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
              Explore moments, perspectives and little pieces of life shared by
              the community.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start rounded-full border border-white/10 px-4 py-2.5 sm:self-auto">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-xs text-gray-400">Community feed</span>
          </div>
        </section>

        {/* Divider */}
        <div className="mb-9 h-px w-full bg-white/[0.08]" />

        {/* Feed Heading */}
        <div className="mb-7 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">Recent moments</h3>
            <p className="mt-1 text-xs text-gray-600">
              Stories from the community
            </p>
          </div>

          <button
            onClick={fetchPosts}
            disabled={loading}
            className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-gray-400 transition hover:bg-white/10 hover:text-white disabled:opacity-50"
          >
            <RefreshCw
              size={14}
              className={loading ? "animate-spin" : ""}
            />
            Refresh
          </button>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex min-h-[300px] flex-col items-center justify-center gap-4">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-white" />
            <p className="text-sm text-gray-500">
              Discovering moments...
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.04] px-6 py-16 text-center">
            <p className="text-lg font-medium">
              Something went wrong.
            </p>

            <p className="mt-2 text-sm text-gray-500">
              We couldn't load the community posts.
            </p>

            <button
              onClick={fetchPosts}
              className="mt-6 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-gray-200"
            >
              Try again
            </button>
          </div>
        )}

        {/* Posts */}
        {!loading &&
          !error &&
          (data?.length > 0 ? (
            <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3">
              {data.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.05]">
                <ImagePlus size={28} className="text-gray-500" />
              </div>

              <h3 className="mt-6 text-xl font-medium">
                No moments yet.
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
                The community is quiet for now. Come back when new stories
                arrive.
              </p>
            </div>
          ))}

        {/* Footer */}
        <footer className="mt-16 border-t border-white/[0.08] pt-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-700">
            Mini Insta · Your world. Your perspective.
          </p>
        </footer>

      </main>
    </div>
  );
};

export default Users;