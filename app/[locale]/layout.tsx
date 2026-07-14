import ReduxProvider from '../../lib/provider';
import { ReactNode } from 'react';
import './navbar.css'
import { NavBar } from '../components/NavBar';

export const metadata = {
  title: "My App",
  description: "Next.js App",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
        <ReduxProvider>
          <div style={{ border: "0px solid #b70951", padding: 0, marginTop: 0 }}>
            <main className="mainContent">
            <NavBar />
            {children}
            </main>
            <footer className="footer">
              <p className="footerText">
                © {new Date().getFullYear()} My Next Application. All Rights Reserved.
              </p>
            </footer>
          </div>
        </ReduxProvider>
  );
}

export default RootLayout;