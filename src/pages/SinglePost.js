import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import { useSelector, useDispatch } from "react-redux";
import imageUrlBuilder from "@sanity/image-url";
import { GET_CURRENT_POST } from "../utils/actions.js";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const SinglePost = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { slug } = useParams();
  const { singlePost } = state;

  useEffect(() => {
    async function sanityFetch() {
      try {
        const singlePost = await sanityClient.fetch(`*[slug.current == "${slug}"] {
                title,
                _id,
                slug,
                mainImage{
                  asset->{
                    _id,
                    url
                  }
                },
                body,
                "name": author->name,
                "authorImage": author->image
            }`);
        console.log(singlePost);
        dispatch({ type: GET_CURRENT_POST, singlePost: singlePost });
      } catch (err) {
        console.error(err);
      }
    }
    sanityFetch();
  }, [dispatch, slug]);
  if (!singlePost) {
    return (
      <h1 className="text-6xl text-gray-800 animate-pulse font-bold cursive leading-none lg:leading-snug home-name">
        Loading...
      </h1>
    );
  }

  return (
    <main className="bg-blue-200 min-h-screen p-12">
      <article className="container shadow-lg mx-auto bg-indigo-100 rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h1 className="cursive text-3xl lg:text-6xl mb-4">
                {singlePost.title}
              </h1>
              <div className="flex- justify-center text-gray-800">
                <img
                  src={urlFor(singlePost.authorImage).url()}
                  alt={singlePost.name}
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <p className="cursive flex items-center pl-2 text-2xl">
                {singlePost.name}
              </p>
            </div>
          </div>
          <img
            src={urlFor(singlePost.mainImage).url()}
            alt={singlePost.title}
            className="w-full object-cover rounded-t"
            style={{ height: "400px" }}
          />
        </header>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
          <BlockContent
            blocks={singlePost.body}
            projectId="qtpyhg9s"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
};

export default SinglePost;
