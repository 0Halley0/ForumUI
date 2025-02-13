import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticleById } from "../store/articleSlice";
import Loading from "../components/Loading";
import DOMPurify from "dompurify";
import "../Article.css";

export default function Article() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentArticle, status } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  if (status === "loading") return <Loading />;
  if (!currentArticle) return <p>Article not found.</p>;

  return (
    <div className="bg-background dark:bg-dark-background min-h-screen">
      <div className="h-full xl:mx-64 pt-16 pb-96 sm:px-16 xl:border-l xl:border-r border-icon dark:border-dark-icon bg-draftPaperBackground dark:bg-dark-draftPaperBackground">
        <h1 className="article text-text dark:text-dark-text">
          {currentArticle.title}
        </h1>
        <div className="flex justify-between"></div>
        <div className="flex justify-center max-w-screen my-12">
          <img
            className="article text-text dark:text-dark-text object-contain w-2/3"
            src={currentArticle.photo_url}
            alt={currentArticle.title}
          />
        </div>
        <div
          className="article text-text dark:text-dark-text"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(currentArticle.content),
          }}
        />
      </div>
    </div>
  );
}
