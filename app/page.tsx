"use client";

import moment from "moment";
import { useState } from "react";

const getHighlightedText = (text: string, highlight: string) => {
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <>
      {parts.map((part, i) => (
        <span
          key={i}
          className={`${
            part.toLowerCase() === highlight.toLowerCase()
              ? "bg-yellow-300 text-black"
              : ""
          }`}
        >
          {part}
        </span>
      ))}
    </>
  );
};

export default function Home() {
  const [word, SetWord] = useState("");
  const [article_list, SetArticleList] = useState([
    {
      id: 1,
      title: "Understading the difference between grid-template and grid-auto",
      created_at: new Date(),
      content:
        "Contented get distrusts certainty nay are frankness concealed ham. On unaffected resolution on considered of. No thought me husband or colonel forming effects. End sitting shewing who saw besides son musical adapted. Contrasted interested eat alteration pianoforte sympathize was. He families believed if no elegance interest surprise an. It abode wrong miles an so delay plate. She relation own put outlived may disposed.",
    },
    {
      id: 2,
      title: "Speedily say has suitable disposal add boy.",
      created_at: new Date(),
      content:
        "Or kind rest bred with am shed then. In raptures building an bringing be. Elderly is detract tedious assured private so to visited. Do travelling companions contrasted it. Mistress strongly remember up to. Ham him compass you proceed calling detract. Better of always missed we person mr. September smallness northward situation few her certainty something.",
    },
    {
      id: 3,
      title: "May musical arrival beloved luckily adapted him.",
      created_at: new Date(),
      content:
        "Was justice improve age article between. No projection as up preference reasonably delightful celebrated. Preserved and abilities assurance tolerably breakfast use saw. And painted letters forming far village elderly compact. Her rest west each spot his and you knew. Estate gay wooded depart six far her. Of we be have it lose gate bred. Do separate removing or expenses in. Had covered but evident chapter matters anxious.",
    },
  ]);
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">Search</h1>
      <div className="flex flex-row gap-2">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs mb-8"
          value={word}
          onChange={(e) => SetWord(e.target.value)}
        />
        <button className="btn btn-primary" onClick={() => SetWord("")}>
          Clear
        </button>
      </div>
      <p className="mb-8">
        {article_list ? article_list.length : 0} posts were found
      </p>
      <div className="flex flex-col gap-8">
        {article_list &&
          article_list.map((article) => {
            return (
              <div
                key={article.id}
                className="border-b border-gray-500 flex flex-col gap-2 pb-8"
              >
                <p className="text-2xl font-bold">
                  {getHighlightedText(article.title, word)}
                </p>
                <p>{moment(article.created_at).format("MMM DD, YYYY")}</p>
                <p>{getHighlightedText(article.content, word)}</p>
              </div>
            );
          })}
      </div>
    </main>
  );
}
