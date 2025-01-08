import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import './index.css'
//import App from './App.tsx'
import StarRating from "./components/hooks/StarRating";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* <App /> */}
        <StarRating />
        <StarRating
            maxRating={5}
            color='red'
            className='test'
            messages={["Terrible", "Bad", "Ok", "Good", "Amazing"]}
        />
    </StrictMode>
);
