function Button(props) {
  const { className, buttonText } = props;
  return <button className={`button ${classsName}`}>{buttonText}</button>;
}

const element = (
  <div className="social-buttons-container">
    <div className="content-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="button-container">
        <Button className="like-button" buttonText="Like" />
        <Button className="comment-button" buttonText="Comment" />
        <Button className="share-button" buttonText="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
