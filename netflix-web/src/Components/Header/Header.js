import "./header.css"

const Header = () => {
    return <div className="header_outer_container">
                <div className="header_container">
                    <div className="header_left">
                        <ul className="header_left">
                            {/* <li><img src="Netflixlogo"/></li> */}
                            <li>Netflix</li>
                            <li>Home</li>
                            <li>TVShows</li>
                            <li>Movies</li>
                            <li>Latest</li>
                            <li>MyList</li>
                            <li>Browse by Langueges</li>

                        </ul>

                    </div>
                    <div className="header_right">
                        <ul>search</ul>
                        <ul></ul>
                        <ul></ul>
                        <ul></ul>


                    </div>

                </div>
          </div>;
}



export default Header;