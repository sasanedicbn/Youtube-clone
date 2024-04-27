
const Comments = ({ comments }) => {
    return (
        <div className="comments">
            {comments.items.map(comment => {
                const { snippet } = comment.snippet.topLevelComment;
                return (
                    <div key={comment.id}>
                        <img src={snippet.authorProfileImageUrl} alt="User Avatar" />
                        <p>{snippet.authorDisplayName}</p>
                        <p>{snippet.publishedAt}</p>
                        <p>{snippet.textOriginal}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Comments;
