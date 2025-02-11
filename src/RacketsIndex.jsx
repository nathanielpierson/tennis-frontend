export function RacketsIndex({rackets}) {
  return (
    <div>
      <h2>all rackets</h2>
      {rackets.map((racket) => (
        <div key={racket.id}>
          <p>{racket.head_size}</p>
          <p>{racket.mass}</p>
          <p>{racket.price}</p>
        </div>
      ))}
    </div>
  )
}