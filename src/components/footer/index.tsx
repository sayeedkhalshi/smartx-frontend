import UnderlineLink from '@/components/links/UnderlineLink';

const Footer = () => {
  return (
    <footer className='relative bottom-2 text-center text-gray-700'>
      © {new Date().getFullYear()} By{' '}
      <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'>
        SmartX
      </UnderlineLink>
    </footer>
  );
};

export default Footer;
