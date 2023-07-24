import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
  <div>
    Landing Page (Unprotected)
    <div>
    <Link href='/sign-in'>
    <Button>
      Login
    </Button>
    </Link>
    <Link href='/sign-up'>
    <Button>
      register
    </Button>
    </Link>
    </div>
   
  </div>
  )
}
