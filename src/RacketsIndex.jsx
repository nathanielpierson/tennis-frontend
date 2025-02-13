export function RacketsIndex({rackets, onShowRacket}) {
  const handleClick = () => {
    console.log("button clicked");
    onShowRacket()
  }
  return (
    <div>
      <h2>all rackets</h2>
      {rackets.map((racket) => (
        <div key={racket.id}>
          <p>{racket.head_size}</p>
          <p>{racket.mass}</p>
          <p>{racket.price}</p>
          <button onClick={handleClick}>more info</button>
        </div>
      ))}
    </div>
  )
}