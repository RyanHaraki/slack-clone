import MessageIcon from '@material-ui/icons/Message';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PeopleIcon from '@material-ui/icons/People';

export const sidebarItems = [
    {
        icon: <MessageIcon />,
        text: "Thread"
    },
    {
        icon: <InboxIcon />,
        text: "All DMs"
    },
    {
        icon: <DraftsIcon />,
        text: "Mentions & Reactions"
    },
    {
        icon: <BookmarkBorderIcon />,
        text: "Save Items"
    },
    {
        icon: <PeopleIcon />,
        text: "People & Groups"
    },
    {
        icon: <MoreHorizIcon />,
        text: "More"
    },
]
