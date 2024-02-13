import { LinkGo } from './BackLink.styled';

const BackLink = ({ href, children }) => {
  return <LinkGo to={href}>{children}</LinkGo>;
};

export default BackLink;
