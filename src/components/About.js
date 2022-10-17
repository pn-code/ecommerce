const About = () => {
    return (
        <div className="about-page">
            <h1>About</h1>
            <h4>Disclaimer: this is not a real website.</h4>
            <p>This website was created to practice the various skills required for web-development.</p>
            <h3>Check out more of my projects here:
                <a 
                    className="git-hub-link" 
                    href="https://github.com/pn-code"
                    target="_blank"
                    rel="noreferrer"
                    >pn-code @ GitHub
                </a>
            </h3>
        </div>
    )
}

export default About;