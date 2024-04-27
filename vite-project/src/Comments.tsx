

const Comments = ({ comments }) => {
    const getTimeAgo = (timestamp) => {
        const current = new Date();
        const commentTime = new Date(timestamp);
        const difference = current.getTime() - commentTime.getTime();
        const seconds = Math.floor(difference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const weeks = Math.floor(days / 7);

        if (weeks > 0) {
            return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
        } else if (days > 0) {
            return `${days} day${days > 1 ? 's' : ''} ago`;
        } else if (hours > 0) {
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else if (minutes > 0) {
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        } else {
            return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
        }
    };

    return (
        <div className="comments">
            {comments.items.map(comment => {
                const { snippet } = comment.snippet.topLevelComment;
                return (
                    <div key={comment.id} className="comment">
                        <img className="avatar" src={snippet.authorProfileImageUrl} alt="User Avatar" />
                        <div className="comment-details">
                            <p className="author">{snippet.authorDisplayName}</p>
                            <p className="timestamp">{getTimeAgo(snippet.publishedAt)}</p>
                            <p className="text">{snippet.textOriginal}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Comments;

