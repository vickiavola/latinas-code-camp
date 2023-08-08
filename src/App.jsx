import AboutMe from './components/AboutMe';
import SocialLink from './components/SocialLink';
import Footer from './components/Footer';
import MainWrapper from './components/Wrapper';
import './App.css';

const userInfo = {
  username: '@vickiavola',
  profilePicture: 'https://pbs.twimg.com/profile_images/1540522912750379008/v6OojeTY_400x400.jpg',
  description: 'Frontend developer',
  links: [
    {
      title: 'Twitter',
      url: 'https://twitter.com/vickiavola',
    },
    {
      title: 'GitHub',
      url: 'https://github.com/vickiavola',
    },
    {
      title: 'Instagram',
      url: 'http://www.instagram.com/vickiavola',
    },
  ],
};

function App() {
  return (
    <MainWrapper>
  <main>
    <AboutMe
      username={userInfo.username}
      profileUrl={userInfo.profilePicture}
      description={userInfo.description}
    />
    {userInfo.links.map((item) => (
      <SocialLink key={item.title} title={item.title} link={item.url} />
          ))} 
  </main>
      <Footer
      username={userInfo.username}
      />
  </MainWrapper>
  );
    }


export default App;
