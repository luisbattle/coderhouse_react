import './Footer.css'
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons'
export default function Footer() {
    return (
        <div className="fixed-bottom text-center bg-black">
            <ul className='p-2'>
                <li>eCommerce</li>
                <li>Copyright 2023</li>
                <li><Facebook /> <Instagram /> <Twitter /> </li>
            </ul>
        </div>
    )
}
