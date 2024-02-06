// import anime from "animejs/lib/anime.es.js";
import { useState } from "react";
import "./App.css";
import Gif from "./peach-and-goma-goma.gif";
import Happy from "./happy.gif";
import Sad from "./sad.gif";

function App() {
    const [width, setWidth] = useState(190);
    const [state, setState] = useState(0);
    const [height, setHeight] = useState(54);

    const click = () => {
        setWidth(width + 30);
        if (height > 750) {
            setState(-1);
        }
        setHeight(height + 30);
    };
    return (
        <div>
            {state === 1 ? (
                <div className="App">
                    <img alt="love" style={{ width: "40vh" }} src={Happy}></img>
                </div>
            ) : state === 0 ? (
                <div className="App">
                    <div
                        style={{
                            fontWeight: 800,
                            fontSize: "30px",
                            color: "fuchsia",
                        }}
                    >
                        Will you be My Valentine's
                    </div>
                    <img alt="love" style={{ width: "40vh" }} src={Gif}></img>
                    <div className="Bottom">
                        <button
                            className="Button"
                            onClick={() => {
                                setState(1);
                            }}
                        >
                            <div className="cover cut"></div>
                            <div className="text">Yes</div>
                        </button>
                        <button
                            className="Button"
                            style={{
                                width: `${width}px`,
                                height: `${height}px`,
                            }}
                            onClick={click}
                        >
                            <div className="cover cut"></div>
                            <div className="text">No</div>
                        </button>
                    </div>
                </div>
            ) : (
                <div className="App">
                    <img alt="love" style={{ width: "40vh" }} src={Sad}></img>
                </div>
            )}
        </div>
    );
}
// const style =
export default App;
