import {AiFillGithub} from "react-icons/ai"

const About = () => {
    return (
        <main className="flex flex-col gap-[10%] h-[72vh] mx-4 mt-[10%] items-center">
            <h1 className="sm:text-center text-6xl font-bold">About</h1>
            <h2 className="text-3xl font-semibold text-red-600">
                THIS IS NOT A REAL WEBSITE!
            </h2>
            <p className="text-xl">
                This website was built with the intention of displaying various
                technical skills used in web development.
            </p>
            <p className="flex gap-4 items-center text-xl">
                Check out more of my projects here:
                <a
                    className="git-hub-link"
                    href="https://github.com/pn-code"
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiFillGithub size={40} className="hover:text-gray-600"/>
                </a>
            </p>
        </main>
    );
};

export default About;
