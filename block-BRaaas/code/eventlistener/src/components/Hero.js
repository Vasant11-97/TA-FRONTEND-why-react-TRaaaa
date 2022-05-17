function Hero(props) {
  function handleClick() {
    return alert('Hello React Event');
  }
  return (
    <>
      <section className="sec-padding">
        <button className="btn" onClick={() => handleClick()}>
          Click me
        </button>
      </section>
    </>
  );
}

export default Hero;
