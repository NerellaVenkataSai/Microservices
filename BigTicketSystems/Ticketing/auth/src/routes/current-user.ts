import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
  console.log('in current-user')
  res.send('in current-user')
})

export {router as currentUserRouter}