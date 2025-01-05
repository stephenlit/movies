

interface NavbarProps {
    setQuery: React.Dispatch<React.SetStateAction<string>>
    query: string;
}

function Navebar({ setQuery, query }: NavbarProps) {
    return (
        <div className='navbar'>
            <h3>🍿usePopcorn</h3>
            <input
                type='text'
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder='Search...'
            />
            <p>Top 10 results</p>
        </div>
    );
}

export default Navebar;
