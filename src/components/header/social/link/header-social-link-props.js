import github from '../../../../assets/icons/github.png';
import linkedin from '../../../../assets/icons/linkedin.png';
import medium from '../../../../assets/icons/medium.png';
import npmjs from '../../../../assets/icons/npmjs.png';
import reddit from '../../../../assets/icons/reddit.png';
import skype from '../../../../assets/icons/skype.png';
import stackoverflow from '../../../../assets/icons/stackoverflow.png';
import twitter from '../../../../assets/icons/twitter.png';
import youtube from '../../../../assets/icons/youtube.png';

const linkProps = (website, value) => {
  switch (website) {

    case 'github':
      return {
        alt: 'GitHub',
        href: 'https://github.com/' + value,
        src: github,
        title: 'GitHub'
      };

    case 'linkedin':
      return {
        alt: 'LinkedIn',
        href: 'https://www.linkedin.com/in/' + value + '/',
        src: linkedin,
        title: 'LinkedIn'
      };

    case 'medium':
      return {
        alt: 'Medium',
        href: 'https://medium.com/@' + value,
        src: medium,
        title: 'Medium'
      };

    case 'npmjs':
      return {
        alt: 'NPM',
        href: 'https://www.npmjs.com/~' + value,
        src: npmjs,
        title: 'NPM'
      };

    case 'reddit':
      return {
        alt: 'reddit',
        href: 'https://www.reddit.com/user/' + value,
        src: reddit,
        title: 'reddit'
      };

    case 'skype':
      return {
        alt: 'Skype',
        href: 'skype:' + value + '?chat',
        src: skype,
        title: 'Skype'
      };

    case 'stackoverflow':
      return {
        alt: 'Stack Overflow',
        href: 'https://stackoverflow.com/users/' + value,
        src: stackoverflow,
        title: 'Stack Overflow'
      };

    case 'twitter':
      return {
        alt: 'Twitter',
        href: 'https://twitter.com/' + value,
        src: twitter,
        title: 'Twitter'
      };

    case 'youtube':
      return {
        alt: 'YouTube',
        href: 'https://www.youtube.com/user/' + value,
        src: youtube,
        title: 'YouTube'
      };

    default:
      return null;
  }
};

export default linkProps;
