import React from "react";

function Beliefs(props) {
    return (
        <>
            <div className="d-flex my-5 quicksand-medium-500 justify-content-center">
                <h1
                    className={`text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    Beliefs
                </h1>
            </div>
            <div className="container my-3">
                <p
                    className={`quicksand-medium-500 text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    At BOOKit, we are guided by a set of core beliefs and
                    principles that shape our vision and approach to creating a
                    vibrant and inclusive literary community. Our beliefs are at
                    the heart of everything we do:
                    <ul>
                        <li>
                            Literature Unites Us - We believe in the power of
                            literature to connect people from diverse
                            backgrounds, cultures, and experiences. Books have
                            the unique ability to bridge gaps, foster empathy,
                            and ignite conversations that transcend boundaries.
                        </li>
                        <li>
                            Access to Knowledge is a Right - We are firm
                            believers in the idea that knowledge should be
                            accessible to all, regardless of financial
                            constraints. Every individual has the right to
                            explore, learn, and grow through the pages of a
                            book.
                        </li>
                        <li>
                            Sustainability Matters - We are committed to
                            reducing the environmental impact of the book
                            industry. By offering rentals and promoting the
                            reuse of books, we actively contribute to
                            sustainability and the conservation of our planet.
                        </li>
                        <li>
                            Reading is a Journey - We believe that every
                            reader's journey is unique and should be respected.
                            Whether you're an avid reader or just beginning to
                            explore the joy of books, your path is meaningful
                            and valid.
                        </li>
                        <li>
                            Community Nurtures Growth - Our belief in the power
                            of community drives us to create a space where book
                            enthusiasts can come together, discuss, share, and
                            discover. Through the collective wisdom of our
                            community, we grow together.
                        </li>
                        <li>
                            Respect for Authors and Publishers - We uphold the
                            highest standards of respect for authors and
                            publishers. We acknowledge their creative efforts
                            and their right to fair compensation for their work.
                            Copyright and intellectual property rights are
                            fundamental to our platform.
                        </li>
                        <li>
                            Convenience Enhances Enjoyment - In a world where
                            convenience is key, we aim to make reading a
                            hassle-free and enjoyable experience. We believe
                            that technology can enhance the joy of reading
                            without compromising on the essence of the written
                            word.
                        </li>
                        <li>
                            Continuous Improvement - We are committed to
                            continuous improvement. We believe in the value of
                            feedback, evolution, and adaptation to better serve
                            the needs of our community and promote the love of
                            reading.
                        </li>
                        <li>
                            Trust and Security - The trust of our users is
                            paramount. We believe in maintaining a secure
                            platform where privacy and data protection are not
                            compromised.
                        </li>
                        <li>
                            Literary Exploration is Endless - Our final belief
                            is that literary exploration is an endless journey.
                            The world of books is vast, and there is always
                            something new to discover, learn, and appreciate.
                        </li>
                    </ul>
                    <br />
                    <h5>
                        Our beliefs are the foundation of BOOKit and guide us in
                        our mission to revolutionize the way people engage with
                        books and literature in a digital age. We invite you to
                        join us in these beliefs and be part of our ever-growing
                        literary community. Happy reading!
                    </h5>
                </p>
                <br />
                <br />
            </div>
        </>
    );
}

export default Beliefs;
