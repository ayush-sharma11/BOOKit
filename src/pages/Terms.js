import React from "react";

function Terms(props) {
    return (
        <>
            <div className="d-flex my-5 justify-content-center">
                <h1
                    className={`quicksand-medium-500 text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    Terms & Conditions
                </h1>
            </div>
            <div className="container my-3">
                <p
                    className={`my-3 quicksand-medium-500 text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    <h2
                        className={`my-3 text-${
                            props.mode === "dark" ? "light" : "dark"
                        }`}
                    >
                        Welcome to BOOKit! We're excited to have you as a part
                        of our community.
                    </h2>
                    Before you start using our platform, please carefully read
                    and understand our Terms and Conditions.
                    <br />
                    By using BOOKit, you agree to abide by these terms and
                    guidelines. Acceptance of Terms By accessing or using
                    BOOKit, you are agreeing to comply with and be bound by the
                    following Terms and Conditions. If you do not agree with any
                    part of these terms, please refrain from using our services.
                    <br />
                    <br />
                    <ol>
                        <li className="bold-li">
                            <strong>Age Limitation:</strong> You must be at
                            least 18 years of age or the legal age of majority
                            in your jurisdiction to use BOOKit. If you are under
                            this age, you may use BOOKit only with the
                            involvement of a parent or guardian.
                        </li>
                        <li className="bold-li">
                            <strong>User Account:</strong> You are responsible
                            for maintaining the confidentiality of your user
                            account and password. Any activities that occur
                            under your account are your sole responsibility.
                        </li>
                        <li className="bold-li">
                            <strong>User Conduct:</strong> You agree not to
                            engage in any activity that may disrupt or interfere
                            with the proper functioning of BOOKit or to use our
                            services for any unlawful purpose.
                        </li>
                        <li className="bold-li">
                            <strong>Content Sharing:</strong> You may only share
                            content on BOOKit that you have the right to share.
                            This includes not violating copyright or
                            intellectual property rights. We respect authors'
                            and publishers' rights and expect you to do the
                            same.
                        </li>
                        <li className="bold-li">
                            <strong>License:</strong> By sharing content on
                            BOOKit, you grant us a worldwide, non-exclusive,
                            royalty-free, sublicenseable, and transferable
                            license to use, reproduce, distribute, prepare
                            derivative works of, display, and perform the
                            content in connection with BOOKit.
                        </li>
                        <li className="bold-li">
                            <strong>Privacy Policy:</strong> Your use of BOOKit
                            is also governed by our Privacy Policy. By using our
                            services, you consent to the terms and practices
                            outlined in the Privacy Policy.
                        </li>
                        <li className="bold-li">
                            <strong>Refund Policy:</strong> You must agree to
                            our refund an return policies. If you use BOOKit, it
                            shall be assumed that you have read, understood and
                            agreed to the refund and return policies.
                        </li>
                        <li className="bold-li">
                            <strong>Termination:</strong> BOOKit reserves the
                            right to terminate or suspend your account at any
                            time for any violation of our Terms and Conditions.
                            Modifications We may revise and update these Terms
                            and Conditions from time to time. Continued use of
                            BOOKit after any such changes shall constitute your
                            consent to these changes.
                        </li>
                    </ol>
                </p>
                <br />
                <h4
                    className={`quicksand-medium-500 text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    By using BOOKit, you acknowledge that you have read,
                    understood, and agreed to our Terms and Conditions. We
                    encourage you to read these terms carefully, as they form
                    the basis for a respectful and enjoyable community of
                    readers and users.
                    <br />
                    <br />
                    Thank you for being a part of BOOKit. Happy reading!
                </h4>
            </div>
            <br />
            <br />
        </>
    );
}

export default Terms;
