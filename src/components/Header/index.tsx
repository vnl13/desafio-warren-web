import Link from 'next/link';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <Link href='/' passHref>
        <a>warren</a>
      </Link>
    </Container>
  );
}
