import { getCurrentYear, getFooterCopy } from "../utils/utils";

import "./Footer.css";

function Footer() {
    return (
        <div className="App-footer">
            <p>
                <i>Copyright</i> {getCurrentYear()} - {getFooterCopy(false)}
            </p>
        </div>
    );
}

export default Footer;