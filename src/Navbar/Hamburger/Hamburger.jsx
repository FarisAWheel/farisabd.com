import icon from '../../assets/hamburger.svg'

function Hamburger() {
    return (
        <div>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns={icon}>
                <path d="M6 24H42M6 12H42M6 36H42" stroke="#402027" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );
}

export default Hamburger;