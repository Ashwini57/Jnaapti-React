import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import WhySection from "./components/WhySection";
import Features from "./components/Features";
import Courses from "./components/Courses";
import Clients from "./components/Clients";
import FooterSection from "./components/FooterSection";

function App() {
    return (
        <div className="App">
            <Header />

            <Intro/>

            <WhySection/>
            
            <Features/>
            
            <Courses/>

            <Clients/>

            <FooterSection/>
        </div>
    );
}

export default App;
