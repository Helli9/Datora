export default async function handler(req, res) {
    const response = await fetch('https://api.alternative.me/fng/');
    const data = await response.json();
  
    res.status(200).json(data);
}
  