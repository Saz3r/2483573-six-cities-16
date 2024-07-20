import { Header } from '../header/header';

const Layout = ({children}: {children: React.ReactNode}) => {
    return(
        <>
        <Header />
        {children}
        </>
    )
}
export {Layout}