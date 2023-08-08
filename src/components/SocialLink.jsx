import Proptypes from 'prop-types';

const SocialLink = ({ title, link }) =>{
     return (
          <a href={link} className='social-link' target='_black' rel='norefer'>
               {title}
          </a>
     );
};

SocialLink.propTypes ={
     title: Proptypes.string.isRequired,
     link: Proptypes.string.isRequired,
}

export default SocialLink;
