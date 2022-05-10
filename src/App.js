import './App.css';
import Home from "./app/home/home";
import {HelmetProvider} from 'react-helmet-async';
import {Helmet} from "react-helmet";
function App() {
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>App Title</title>
                    <meta name="description" content="App Description"/>
                    <meta name="theme-color" content="#008f68"/>
                </Helmet>
                <Home/>
            </div>
        </HelmetProvider>
    );
}

export default App;
