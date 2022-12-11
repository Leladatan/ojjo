import React, {FC} from 'react';
import "../../Styles/notFound.scss"

const NotFound: FC = ({}) => {
    return (
        <main className="main">
            <div className="container">
                <div className="main__content">
                    <h1 className="error__message">
                        Link not found...
                    </h1>
                </div>
            </div>
        </main>
    );
};

export default NotFound;