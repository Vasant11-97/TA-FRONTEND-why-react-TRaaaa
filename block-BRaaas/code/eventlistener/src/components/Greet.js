function Greet(props) {
  let arr = ['Arya', 'John', 'Bran'];
  function handleClick(name) {
    console.log(name);
    return alert(`Hello ${name}`);
  }
  return (
    <>
      <section className="sec-padding">
        <h2>Greet</h2>
        <div>
          {arr.map((elem, i) => {
            return (
              <button className="btn" key={i} onClick={() => handleClick(elem)}>
                {elem}
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Greet;
