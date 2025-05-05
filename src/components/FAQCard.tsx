import star from "../assets/images/icon-star.svg";
import minusIcon from "../assets/images/icon-minus.svg";
import plusIcon from "../assets/images/icon-plus.svg";
import { faqItems } from "../constants/faq-items";
import { faqItemInterface } from "../constants/faq-items";
import { useState } from "react";

const FAQCard = () => {
  const [questionsAnswers, setQuestionsAnswers] = useState<faqItemInterface[]>(faqItems);

  const toggleAnswer = (id: number) => {
    setQuestionsAnswers((prev) =>
      prev.map(
        (item) => (item.id === id ? { ...item, isVisible: !item.isVisible } : item) // mantém os outros como estão
      )
    );
  };

  return (
    <main className="p-6 bg-white rounded-2xl w-10/12 mt-[-150px] max-w-[700px] mb-10 shadow-lg">
      <div className="flex items-center mb-5">
        <img src={star} alt="star" className="mr-4 h-6 w-6" />
        <h1 className="title">FAQs</h1>
      </div>
      {questionsAnswers.map((item: faqItemInterface, index: number) => (
        <section
          key={index}
          className="w-full mb-5"
          onClick={() => {
            toggleAnswer(item.id);
          }}
        >
          <div className="flex justify-between items-center w-full mb-5">
            <h2 className="ccordion-question w-10/12 hover:text-[#AD28EB] hover:cursor-pointer">{item.question}</h2>
            <img
              src={item.isVisible ? minusIcon : plusIcon}
              alt={item.isVisible ? "minus icon" : "plus icon"}
              className="hover:cursor-pointer"
            />
          </div>
          <p className={`faq-response mb-5 ${item.isVisible ? "block" : "hidden"}`}>{item.answer}</p>
          <hr className="border border-purple-100" />
        </section>
      ))}
    </main>
  );
};

export default FAQCard;
