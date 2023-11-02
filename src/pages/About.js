import React from "react";

function About(props) {
    return (
        <>
            <div className="d-flex my-5 justify-content-center">
                <h1
                    className={`quicksand-medium-500 text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    About Us
                </h1>
            </div>
            <div className="container">
                <p
                    className={`my-3 quicksand-medium-500 text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    {" "}
                    <h4>
                        Welcome to BOOKit, a place where the magic of books
                        comes to life in the digital age!
                    </h4>
                    <br />
                    At BOOKit, we're passionate about books, and we're on a
                    mission to transform the way people experience literature.
                    Our story is one of innovation, accessibility, and a deep
                    love for the written word. Our Journey with BOOKit was born
                    out of a shared vision to make the world of books more
                    accessible and enjoyable for everyone. We firmly believe
                    that books should be cherished and shared, not just
                    collected and forgotten on dusty shelves. With the rise of
                    digital technology, we saw an opportunity to create a
                    platform that brings book lovers together and connects
                    readers with a vast, diverse library of literary treasures.
                    <br />
                    <br />
                    What Sets Us Apart At BOOKit, we're not just another online
                    bookstore. We're a community of readers, students, and
                    literary enthusiasts who have come together to revolutionize
                    the way books are experienced. Here's what makes us unique:
                    <br />
                    <br />
                    <ul>
                        <li>
                            Diverse Library: BOOKit offers an extensive
                            collection of books that spans genres and languages,
                            from classic masterpieces to contemporary
                            bestsellers. No matter your reading preferences,
                            you'll find something to pique your interest.
                        </li>
                        <li>
                            Affordability: We understand that not everyone can
                            or wants to buy every book they read. That's why we
                            offer affordable rental options, making it easy to
                            access the books you want without breaking the bank.
                        </li>
                        <li>
                            Community Hub: BOOKit is more than a book platform;
                            it's a thriving community of book enthusiasts. Join
                            discussions, share your reviews, and get
                            personalized book recommendations based on your
                            reading history.
                        </li>
                        <li>
                            Eco-Conscious Approach: We are committed to reducing
                            the environmental impact of the book industry. By
                            offering rentals and promoting the reuse of books,
                            we contribute to sustainability and the conservation
                            of our planet.
                        </li>
                        <li>
                            User-Friendly Experience: Our website is designed
                            with simplicity and ease of use in mind. Browsing,
                            searching, and ordering books is a breeze, ensuring
                            that finding your next literary adventure is
                            convenient.
                        </li>
                        <li>
                            Privacy and Security: Your privacy and security are
                            our top priorities. BOOKit ensures that all your
                            transactions and personal information are handled
                            with the utmost care and protection.
                        </li>
                    </ul>
                    Our Vision In today's fast-paced world, where digital
                    distractions abound, the need for a dedicated platform for
                    books is more crucial than ever. Our vision is simple but
                    profound: to make literature accessible, affordable, and
                    socially engaging. We're on a mission to unite avid readers,
                    students, and book lovers and to open up new avenues for
                    literary exploration and connection. Join Us on this Journey
                    We invite you to join us on this exciting journey through
                    the world of literature. Whether you're a seasoned bookworm
                    or just beginning to explore the joy of reading, BOOKit is
                    your platform. Together, we'll redefine the way books are
                    cherished, shared, and enjoyed. Thank you for being a part
                    of the BOOKit community. Happy reading!
                </p>
            </div>
            <div className="container my-5 d-flex justify-content-center">
                <h2
                    className={`quicksand-medium-500 text-center text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    So what are you waiting for?
                    <br />
                    Join us in our journey to transform the world of Reading!
                </h2>
            </div>
        </>
    );
}

export default About;
