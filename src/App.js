import './App.css';
import Home from "./app/home/home";
import {Helmet} from "react-helmet";

function App() {
    return (
        <div>
            <Helmet>
                <title>App Title</title>
                <meta name="description" content="App Description"/>
                <meta name="theme-color" content="#008f68"/>
            </Helmet>
            <Home/>
        </div>
    );
}

export default App;
