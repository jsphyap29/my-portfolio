import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube, faFacebook, faTiktok} from "@fortawesome/free-brands-svg-icons"

export default function Icons () {
    
    const click = () => window.open("https://www.google.com", "_blank");


    return(
        <>
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTiktok} />
            
            
            
        </>
        
    )
}