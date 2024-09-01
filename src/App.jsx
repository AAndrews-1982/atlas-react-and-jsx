import React from 'react';
import Greeting from './components/Greeting';
import SocialLinks from './components/SocialLinks';
import Header from './components/Header';
import Section from './components/Section';
import OpenLink from './components/OpenLink';
import CopyLink from './components/CopyLink';
import HelpfulResource from './components/HelpfulResource';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function App() {
	return (
    <div>
	<h1>Hello Atlas</h1>
	<Header />
	<Section title="What is React?">
	<p>
        	React is a popular JavaScript library for building user interfaces, particularly for single-page applications.
		It's used to build web applications that can update and render efficiently in response to data changes.
		React allows developers to create large web applications that can change data, without reloading the page.
		Its component-based architecture encourages the development of reusable UI components, making code more maintainable and scalable.
        </p>
      </Section>
    
	<Section title="Benefits of React">
        <ul>
          <li>Component-Based Architecture</li>
          <li>Virtual DOM for Efficient Updates</li>
          <li>Strong Community and Ecosystem</li>
          <li>Reusable Components</li>
          <li>Easy to Learn and Use</li>
        </ul>
      </Section>

	<OpenLink link="https://www.example.com" />
	<CopyLink link="https://www.example.com" />
	 
	<Section title="Helpful resources">
        <HelpfulResource 
          link="https://reactjs.org/docs/getting-started.html" 
          label="Official React Documentation" 
        />
        <HelpfulResource 
          link="https://www.freecodecamp.org/news/learn-react-beginners-tutorial/" 
          label="FreeCodeCamp React Tutorial" 
        />
        <HelpfulResource 
          link="https://www.youtube.com/watch?v=w7ejDZ8SWv8" 
          label="React Crash Course by Traversy Media" 
	/>
	</Section>
    
	<AboutMe />
	<Footer />
      </div>
  );
}

export default App;
