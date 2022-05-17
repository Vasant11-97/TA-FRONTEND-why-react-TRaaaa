import PropTypes from 'prop-types';

import data from '../data';

function Main() {
  return (
    <div className="main">
      {data.map((article) => {
        return <Card key={article.title} info={article} />;
      })}
    </div>
  );
}
function Card(props) {
  return (
    <div className="wrapper">
      <img src={props.info.urlToImage} alt="" width="100%" height="150px" />
      <h2>Author: {props.info.author}</h2>
      <p>Title: {props.info.title}</p>
      <p>Description: {props.info.description}</p>
      <p>Published At:: {props.info.publishedAt}</p>
      <p>Content: {props.info.content}</p>
    </div>
  );
}

Card.propropTypes = {
  name: PropTypes.string.isRequired,
};
export default Main;
