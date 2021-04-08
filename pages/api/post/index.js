export default function handler(req, res) {
  const { number } = req.query
  res.end(`Post: ${number}`)
}