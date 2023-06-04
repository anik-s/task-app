import {ListGroupItem} from "react-bootstrap";
import {FaArrowDown, FaArrowRight} from "react-icons/fa";
import styles from './services.module.css';

export default function ServiceSidebarLink({href, active, children}) {
    return (
        <ListGroupItem
            active={active} action href={href}
            className={`d-flex justify-content-between align-items-start ${styles.serviceSidebarBg}`}
        >
            <div className="ms-2 me-auto fw-semibold">
                {children}
            </div>
            {active ? <FaArrowDown /> : <FaArrowRight />}
        </ListGroupItem>
    )
}
