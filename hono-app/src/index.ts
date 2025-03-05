import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json({
    msg:"This is going from a damnn hono server"
  })
})

export default app
