import { getCurrentYear, getFooterCopy } from "../utils/utils";

import "./Footer.css";

function Footer() {

    const date = new Date ()
    return (
        <div className="App-footer">
            <p>
                <i>Copyright</i> {getCurrentYear()} - {getFooterCopy(true)}
            </p>
        </div>
    );
}

export default Footer;