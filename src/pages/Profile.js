import React from "react";

import ProfileLoggedIn from "../components/ProfileLoggedIn";
import ProfileLogin from "../components/ProfileLogin";

function Profile(props) {
    const signedIn = true;

    const userName = "Ayush Sharma";
    const userContact = "9876543210";
    const userEmail = "founder@bookit.site";
    const userBadge = "Founder Reader";

    const profileImg =
        "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22180%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20180%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18b3e45615a%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18b3e45615a%22%3E%3Crect%20width%3D%22180%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2259.916664123535156%22%20y%3D%2294.50500020980834%22%3E180x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

    return (
        <>
            <div className="container my-5">
                <div className="">
                    <h1
                        className={`quicksand-medium-500 text-${
                            props.mode === "dark" ? "light" : "dark"
                        }`}
                    >
                        Your Profile
                    </h1>
                    {!signedIn ? (
                        <ProfileLogin mode={props.mode} />
                    ) : (
                        <ProfileLoggedIn
                            mode={props.mode}
                            userBadge={userBadge}
                            userContact={userContact}
                            userEmail={userEmail}
                            userName={userName}
                            profileImg={profileImg}
                        />
                    )}
                </div>
            </div>
        </>
    );
}

export default Profile;
