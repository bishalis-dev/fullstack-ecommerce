import React from 'react';
import useDocumentTitle from './useTitleHook';
function About() {
    useDocumentTitle('About');
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
    </div>
  );
};
export default About;