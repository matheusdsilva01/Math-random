import { MouseEvent } from "react";
import './index.css';

const ToggleTheme = () => {
    const root = document.querySelector(':root')!;


    const themeBlack = {
        "--black": "#000",
        "--black-transparent": "#242424",
        "--gray": "#2c2c2c",
        "--white": "#fff",
        "--white-transparent": "#ffffffde"
    }

    const themeWhite = {
        "--black": "#fff",
        "--black-transparent": "#ffffffde",
        "--gray": "#ffffffde",
        "--white": "#000",
        "--white-transparent": "#242424",
    }


    const toggleTheme = (e: MouseEvent<HTMLInputElement>) => {

        for (const key in themeWhite) {
            if (e.currentTarget.checked) {
                // @ts-ignore
                root!.style.setProperty(key, String(themeWhite[key]));
            } else {
                // @ts-ignore
                root!.style.setProperty(key, String(themeBlack[key]));
            }
        }
    }


    return (
        <label id="switch" className="switch">
            <input type="checkbox" onClick={toggleTheme} id="slider" />
            <span className="slider round"></span>
        </label>
    )
}

export default ToggleTheme;