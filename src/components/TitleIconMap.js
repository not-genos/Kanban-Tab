import { BacklogIcon, CancelledIcon, DoneIcon, HighPriorityIcon, InProgressIcon, LowPriorityIcon, MediumPriorityIcon, NoPriorityIcon, TodoIcon, UrgentPriorityColoredIcon, UrgentPriorityIcon } from "../assets";
import { GROUPING_OPTIONS } from "../constants";

export const getTitleIconMap = (colored=false) => ({
    [GROUPING_OPTIONS.PRIORITY.value] : {
        0: <img src={NoPriorityIcon} alt="No Priority"/>,
        1: <img src={LowPriorityIcon} alt="Low"/>,
        2: <img src={MediumPriorityIcon} alt="Medium"/>,
        3: colored ? <img src={UrgentPriorityColoredIcon} alt="High"/> : <img src={HighPriorityIcon} alt="High"/>,
        4: <img src={UrgentPriorityIcon} alt="Urgent"/>,
    },

    [GROUPING_OPTIONS.STATUS.value] : {
        'Todo': <img src={TodoIcon} alt="Todo"/>,
        'Backlog': <img src={BacklogIcon} alt="Backlog"/>,
        'In progress': <img src={InProgressIcon} alt="In progress"/>,
        'Done': <img src={DoneIcon} alt="Done"/>,
        'Canceled': <img src={CancelledIcon} alt="Canceled"/>,
    }
});
