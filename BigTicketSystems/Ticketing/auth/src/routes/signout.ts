import express from 'express';

const router = express.Router();

router.get('/api/users/signout', (req, res) => {
  console.log('in signout')
})

export {router as signOutRouter}