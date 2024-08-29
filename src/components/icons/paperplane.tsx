import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ShareButton = () => {
    return (
        <button>
            <FontAwesomeIcon icon={faPaperPlane} /> 
        </button>
    );
};

export default ShareButton;