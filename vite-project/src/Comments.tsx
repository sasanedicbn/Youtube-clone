const Comments = ({ comments }) => {
    return (
        <div className="comments">
            {comments.items.map(comment => {
                const { snippet } = comment.snippet.topLevelComment;
                return (
                    <div key={comment.id} className="comment">
                        <img className="avatar" src={snippet.authorProfileImageUrl} alt="User Avatar" />
                        <div className="comment-details">
                            <p className="author">{snippet.authorDisplayName}</p>
                            <p className="timestamp">{snippet.publishedAt}</p>
                            <p className="text">{snippet.textOriginal}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Comments;
