import React, {FC} from "react";
import "@/Styles/reset.scss"

interface Props {
    reset: () => void;
}

const Reset: FC<Props> = ({reset}) => {
    return (
        <div className="reset">
            <button className="reset__btn"
                    onClick={reset}>
                Сбросить
            </button>
        </div>
    );
};

export default Reset;