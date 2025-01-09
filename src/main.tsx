import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import './index.css'
//import App from './App.tsx'
import StarRating from "./components/hooks/StarRating";
import { useState } from "react";

function RatingValue() {
    const [movieRating, setMovieRating] = useState(0);
    return (
        <div>
            <StarRating
                color='blue'
                maxRating={5}
                onMovieRate={setMovieRating}
            />
            <p>This movie was rated {movieRating}</p>
        </div>
    );
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* <App /> */}
        <StarRating />
        <RatingValue />
        <StarRating
            maxRating={5}
            defaultRating={2}
            color='red'
            className='test'
            messages={["Terrible", "Bad", "Ok", "Good", "Amazing"]}
        />
    </StrictMode>
);
