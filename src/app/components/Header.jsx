import Link from 'next/link';
import Logo from '../assests/To-Do-Logo 1.svg';
import Image from 'next/image';

export default function Header() {
  return (
    <div className='flex justify-center py-6 bg-primary'>
      <Link href={'/'} passHref>
        <Image
          src={Logo}
          alt="Logo"
          // width={100} 
          // height={100} 
          className="cursor-pointer" 
        />
      </Link>
    </div>
  );
}
