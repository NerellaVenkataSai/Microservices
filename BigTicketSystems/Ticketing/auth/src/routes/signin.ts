import express from 'express';

const router = express.Router();

router.get('/api/users/signin', (req, res) => {
  console.log('in signin')
})

export {router as signInRouter}