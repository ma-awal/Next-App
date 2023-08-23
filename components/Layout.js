import Head from 'next/head';
import Link from 'next/link';
const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + '-Amazona' : 'Amazona'}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-between min-h-screen flex-col">
        <header>
          <nav className="flex justify-between h-12 items-center shadow px-4">
            <Link href="/" className="text-lg font-bold">
              Amazona
            </Link>
            <div>
              <Link href="/cart" className="p-2">
                Cart
              </Link>
              <Link href="/login" className="p-2">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 items-center justify-center shadow-inner">
          All right reserver by@Developer
        </footer>
      </div>
    </>
  );
};

export default Layout;
