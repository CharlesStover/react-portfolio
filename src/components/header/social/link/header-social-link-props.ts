export default function linkProps(
  website: string,
  value: string,
): DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> | null {

  switch (website) {

    case 'github':
      return {
        href: 'https://github.com/' + value,
        index: 0,
        title: 'GitHub'
      };

    case 'linkedin':
      return {
        href: 'https://www.linkedin.com/in/' + value + '/',
        index: 1,
        title: 'LinkedIn'
      };

    case 'medium':
      return {
        href: 'https://medium.com/@' + value,
        index: 2,
        title: 'Medium'
      };

    case 'npmjs':
      return {
        href: 'https://www.npmjs.com/~' + value,
        index: 3,
        title: 'NPM'
      };

    case 'reddit':
      return {
        href: 'https://www.reddit.com/user/' + value,
        index: 4,
        title: 'reddit'
      };

    case 'skype':
      return {
        href: 'skype:' + value + '?chat',
        index: 5,
        title: 'Skype'
      };

    case 'stackoverflow':
      return {
        href: 'https://stackoverflow.com/users/' + value,
        index: 6,
        title: 'Stack Overflow'
      };

    case 'twitter':
      return {
        href: 'https://twitter.com/' + value,
        index: 7,
        title: 'Twitter'
      };

    case 'youtube':
      return {
        href: 'https://www.youtube.com/user/' + value,
        index: 8,
        title: 'YouTube'
      };

    default:
      return null;
  }
};
