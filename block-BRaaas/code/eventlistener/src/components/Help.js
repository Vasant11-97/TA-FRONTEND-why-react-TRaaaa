function Help(props) {
  function handleClick() {
    alert('To learn React use https://reactjs.org');
    alert('React and ReactDOM works together');
    alert('Babel helps in writing JSX');
  }
  return (
    <>
      <section className="sec-padding">
        <button className="btn" onClick={() => handleClick()}>
          Help
        </button>
      </section>
    </>
  );
}

export default Help;
