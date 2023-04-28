import React, { useEffect, useState } from "react";

import { useLazyGetSummaryQuery } from "../Services/article";

import { linkIcon } from "../assets";

const Summarize = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [allArticles, setAllArticles] = useState([]);

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articles = JSON.parse(localStorage.getItem("articles"));
    if (articles) {
      setAllArticles(articles);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedArticles = [newArticle, ...allArticles];
      setArticle(newArticle);
      setAllArticles(updatedArticles);
      localStorage.setItem("articles", JSON.stringify(updatedArticles));

      console.log(newArticle);
    }
  };

  return (
    <section className="w-full mt-16 max-w-xl">
      <div className="flex flex-col w-full gap-3">
        <form
          onSubmit={handleSubmit}
          className="relative flex justify-center items-center w-full"
        >
          <img
            src={linkIcon}
            alt=""
            className="absolute left-0 mt-1 ml-3 w-5"
          />
          <input
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            type="url"
            required
            placeholder="Enter Article URL"
            className="peer url_input"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
          >
            Summarize
          </button>
        </form>
        <div className="flex flex-col gap-3 overflow-y-auto max-h-60 ">
          {allArticles.map((article, index) => (
            <div
              key={`link-${index}`}
              className="link_card "
              onClick={() => setArticle(article)}
            >
              <p className="font-satoshi flex-1 text-blue-600 truncate font-medium text-sm">
                {article.url}
              </p>
            </div>
          ))}
        </div>
        <div className="flex max-w-full justify-center items-center my-10">
          {isFetching ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          ) : error ? (
            <p className="font-inter font-bold text-black text-center">
              Well it seems we can't summarize this article
              <br />
              <span className="font-satoshi font-normal text-gray-700">
                {error?.data?.error}
              </span>
            </p>
          ) : (
            article.summary && (
              <div className="flex flex-col gap-3">
                <h2 className="font-satoshi font-bold text-gray-700 text-center">
                  Article <span className="blue_gradient">Summary</span>
                </h2>
                <div className="summary_box">
                  <p className="font-inter font-normal text-gray-700 text-sm">
                    {article.summary}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Summarize;
