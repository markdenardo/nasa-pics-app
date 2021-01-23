let api = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=1995-06-16'

const req = () => {

}

export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}
