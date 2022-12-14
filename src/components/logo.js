/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ image }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        alignItems: 'center',
        width: '10%',
        margin: '0px 0px 0px 50px',
      }}
    >
      <Image src={image} alt="startup landing logo" />
    </Link>
  );
}
