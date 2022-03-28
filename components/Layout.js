import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }) {
    return (
        <div className='layout antialiased'>
            <Navbar />
            <div className='page-content'>{children}</div>
            <Footer />
        </div>
    )
}
