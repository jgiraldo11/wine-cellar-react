const currentYear= new Date().getFullYear();
const githubLink = "https://github.com/jgiraldo11?tab=repositories"

export default function Footer() {

    return(
        <footer>
            <p>&copy; {currentYear}</p>
            <p><a href={githubLink} target="_blank" rel="noreferrer">Github Repository</a></p>
        </footer>
    )
}