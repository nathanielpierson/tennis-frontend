import axios from 'axios'

export function RacketsNew() {
  const handleSubmit = (event) => {
    console.log("handling submit")
    event.preventDefault()
    const params = new FormData(event.target)
    axios.post("http://localhost:3000/rackets.json", params).then(response => {
      console.log(response.data)
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="head_size" />
          <input type="text" name="mass" />
          <input type="text" name="price" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}