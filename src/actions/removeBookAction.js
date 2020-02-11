import { REMOVE_BOOK } from "../constants";

const removeBookAction = id => (
    {
        type: REMOVE_BOOK,
        payload: id,
    }
)

export default removeBookAction;