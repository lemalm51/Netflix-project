import "./header.css"
import Netflixlogo from "../../assets/images/netflixlogo.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Header = () => {
    return <div className="header_outer_container">
                <div className="header_container">
                    <div className="header_left">
                        <ul className="header_left">
                            <li><img src={Netflixlogo } width="100"/></li>
                            <li>Home</li>
                            <li>TVShows</li>
                            <li>Movies</li>
                            <li>Latest</li>
                            <li>MyList</li>
                            <li>Browse by Langueges</li>

                        </ul>

                    </div>
                    <div className="header_right">
                        <ul><SearchIcon /></ul>
                        <ul><NotificationsNoneIcon /></ul>
                        <ul><AccountBoxIcon /></ul>
                        <ul><ArrowDropDownIcon /></ul>


                    </div>

                </div>
          </div>;
}



export default Header;