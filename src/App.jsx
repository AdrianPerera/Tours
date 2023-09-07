const url = 'https://course-api.com/react-tours-project';
import Tours from "./Tours.jsx";

const App = () => {
    return (
        <main className="main">
            <Tours url={url}/>
        </main>)
};
export default App;
