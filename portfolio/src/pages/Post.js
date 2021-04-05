import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import sanityClient from "../sanityClient";
import { Link } from "react-router-dom";
import { GET_POST } from "../utils/actions";

const Post = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    async function sanityFetch() {
      try {
        const post = await sanityClient.fetch(`*[_type == "post"] {
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
        dispatch({ type: GET_POST, post: [...post] });
      } catch (err) {
        console.error(err);
      }
    }
    sanityFetch();
  }, [dispatch]);
  return (
    <main className="bg-gray-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">Blog Posts</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Thanks for checking out my posts!
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article>
            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
              <span>
                <img />
                <span>
                  <h3></h3>
                </span>
              </span>
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Post;
