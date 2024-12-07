import { useContext } from 'react';
import { DataContext } from '../context/data';

// TODO: change styles
export const Docs = () => {
  const data = useContext(DataContext);
  const { topics } = data.docs;
  return (
    <div className="about content">
      <section className="section">
        <ul className="questions">
          {topics.map((topic) => (
            <li className="question" key={topic.title}>
              <h3 className="title">{topic.title}</h3>
              <p className="answer">{topic.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
