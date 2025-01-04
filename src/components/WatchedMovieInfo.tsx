import List from "./List";

function WatchedMovieInfo() {
    return (
        <>
            <div className='stats'>
                <p>Movies you watched</p>
                <p>
                    <span>#️⃣ 1 movie </span>
                    <span>⭐8.8</span>
                    <span>🌠 10.0</span>
                    <span>⌛ 148min</span>{" "}
                </p>
            </div>
            <List>
                {}
                <li>
                    <img
                        src='https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg'
                        alt=''
                    />
                    <div>
                        <h3>Game of Thrones</h3>
                        <p>📅 2011-2019</p>
                    </div>
                </li>
                <li>
                    <img
                        src='https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg'
                        alt=''
                    />
                    <div>
                        <h3>Game of Thrones</h3>
                        <p>📅 2011-2019</p>
                    </div>
                </li>
            </List>
        </>
    );
}

export default WatchedMovieInfo;
