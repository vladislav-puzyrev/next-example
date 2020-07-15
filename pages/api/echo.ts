export default function echo (req: any, res: any) {
  res.statusCode = 200
  res.json({ hello: 'world' })
}
