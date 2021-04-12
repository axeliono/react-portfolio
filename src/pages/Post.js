import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";
import { GET_POSTS } from "../utils/actions";

const Post = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { posts } = state;

  useEffect(() => {
    async function sanityFetch() {
      try {
        const posts = await sanityClient.fetch(`*[_type == "post"] {
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`);
        dispatch({ type: GET_POSTS, posts: [...posts] });
      } catch (err) {
        console.error(err);
      }
    }
    sanityFetch();
  }, [dispatch]);


  if (!posts) {
    return (
      <h1 className="text-6xl text-gray-800 animate-pulse font-bold text-center cursive leading-none lg:leading-snug home-name">
        Loading...
      </h1>
    );
  }

  return (
    <main className="bg-gray-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">Blog Posts</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Thanks for checking out my posts!
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts &&
            posts.map((post, index) => {
              return (
                <article className="hover:opacity-75">
                  <Link to={"/post/" + post.slug.current} key={index}>
                    <span
                      className="block h-64 relative rounded shadow leading-snug bg-gray border-l-8 border blue-400"
                      key={post.index}
                    >
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        className="w-full h-full rounded-r object-cover absolute"
                      />
                      <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                        <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-blue-700 text-blue-100 bg-opacity-75 rounded">
                          {post.title}
                        </h3>
                      </span>
                    </span>
                  </Link>
                </article>
              );
            })}
        </div>
      </section>
    </main>
  );
};

export default Post;
