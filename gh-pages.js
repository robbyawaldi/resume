
import { publish } from 'gh-pages';

publish(
 'public', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/robbyawaldi/robbyawaldi.github.io', // Update to point to your repository
  user: {
   name: 'robbyawaldi', // update to use your name
   email: 'robbyawaldi@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);