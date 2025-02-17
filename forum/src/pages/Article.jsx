import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticleById } from "../store/articleSlice";
import {
  postClap,
  getComments,
  postComment,
} from "../store/userInteractionSlice";
import Loading from "../components/Loading";
import DOMPurify from "dompurify";
import "../Article.css";
import Angry from "../assets/images/angry.png";
import Sad from "../assets/images/sad.png";
import Cool from "../assets/images/cool.png";
import Smiley from "../assets/images/smile.png";
import Happy from "../assets/images/happy-face.png";
import Applause from "../assets/images/applause.png";

export default function Article() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles) || {};
  const { currentArticle, status } = articles;
  const [selectedReaction, setSelectedReaction] = useState(null);
  const { comments, loading } =
    useSelector((state) => state.userInteraction) || [];

  const [newComment, setNewComment] = useState("");
  useEffect(() => {
    if (id) {
      dispatch(fetchArticleById(id)).then((result) => {
        if (result.payload?.slug) {
          dispatch(getComments(result.payload.slug)).then((action) => {});
        }
      });
    }
  }, [dispatch, id]);

  const handleReaction = (reaction) => {
    if (!selectedReaction) {
      setSelectedReaction(reaction);
      dispatch(postClap(id));
    }
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      dispatch(postComment({ article: id, content: newComment })).then(() => {
        dispatch(getComments(currentArticle.slug));
      });
      setNewComment("");
    }
  };

  if (status === "loading") return <Loading />;
  if (!currentArticle) return <p>Article not found.</p>;

  const reactions = [
    { name: "smiley", img: Smiley, alt: "nice" },
    { name: "happy", img: Happy, alt: "happy" },
    { name: "applause", img: Applause, alt: "applause" },
    { name: "angry", img: Angry, alt: "angry" },
    { name: "sad", img: Sad, alt: "sad" },
    { name: "cool", img: Cool, alt: "cool" },
  ];

  return (
    <div className="bg-background dark:bg-dark-background min-h-screen">
      <div className="h-full xl:mx-64 pt-16 pb-96 sm:px-16 xl:border-l xl:border-r border-icon dark:border-dark-icon bg-draftPaperBackground dark:bg-dark-draftPaperBackground">
        <h1 className="article text-text dark:text-dark-text mx-2 sm:mx-12">
          {currentArticle.title}
        </h1>
        <div className="flex justify-center max-w-screen my-12">
          {currentArticle.photo_url && (
            <img
              className="article text-text dark:text-dark-text object-contain w-2/3"
              src={currentArticle.photo_url}
              alt={currentArticle.title}
            />
          )}
        </div>
        <div
          className="article text-text dark:text-dark-text mx-2 sm:mx-12"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(currentArticle.content),
          }}
        />
        <hr></hr>
        <div className="grid grid-cols-3 mx-12 lg:mx-28 gap-12 text-center">
          {reactions.map((reaction) => (
            <div className="col-span-1" key={reaction.name}>
              <button
                onClick={() => handleReaction(reaction.name)}
                disabled={selectedReaction !== null}
                className={`size-16 lg:size-20 transition-transform duration-300 transform hover:scale-125 ${
                  selectedReaction === reaction.name ? "opacity-50" : ""
                }`}
              >
                <img src={reaction.img} alt={reaction.alt} />
              </button>
            </div>
          ))}
          <a
            className="col-span-3 text-end text-gray-400"
            href="https://www.flaticon.com/free-icons/emoji"
            title="emoji icons"
          >
            Emoji icons created by justicon - Flaticon
          </a>
        </div>
        <hr></hr>
        <div>
          <h2 className="text-text dark:text-dark-text">Comments</h2>
          <div className="pt-8 px-8 md:px-28 ">
            <textarea
              className="w-full text-xl border border-icon dark:border-dark-icon focus:border-goldenRod dark:focus:border-dark-goldenRod rounded p-2 mb-2 bg-draftPaperBackground dark:bg-dark-draftPaperBackground text-text dark:text-dark-text"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              className="text-xl font-medium bg-black dark:bg-goldenRod hover:bg-darkPurple dark:hover:bg-gold text-buttonText dark:text-black hover:text-gold dark:hover:text-darkPurple transition duration-200 px-4 py-2 rounded mb-4"
              onClick={handleCommentSubmit}
            >
              Post Comment
            </button>
          </div>
          {loading ? (
            <div className="flex pt-8 justify-center items-center h-full">
              <i className="fa-solid fa-scroll fa-flip text-8xl text-icon dark:text-dark-icon"></i>
            </div>
          ) : comments.length > 0 ? (
            comments.map((comment) => (
              <div className="pt-8 px-8 md:px-28" key={comment.id}>
                <span className="text-sm font-normal text-gray-400">
                  {new Date(comment.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>

                <p className="text-text dark:text-dark-text text-xl font-normal">
                  {comment.content}
                </p>
                <hr />
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-xl pt-8 text-center">
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
