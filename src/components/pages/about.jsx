import { useContext } from 'react';
import { DataContext } from '../context/data';

export const About = () => {
  const data = useContext(DataContext);
  const { questions } = data.about;
  return (
    <div className="about content">
      <section className="section">
        <ul className="questions">
          {questions.map((question) => (
            <li className="question" key={question.title}>
              <h3 className="title">{question.title}</h3>
              <p className="answer">{question.answer}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
