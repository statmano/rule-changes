import React, { useState } from 'react';

interface CommentBoxProps {
    submissionId: number;
    onCommentSubmit: (submissionId: number, comment: string) => void;
}

const CommentBox: React.FC<CommentBoxProps> = ({ submissionId, onCommentSubmit }) => {
    const [comment, setComment] = useState('');

    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(event.target.value);
    };

    const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (comment.trim()) {
            onCommentSubmit(submissionId, comment);
            setComment('');
        }
    };

    return (
        <form onSubmit={handleCommentSubmit}>
            <textarea
                value={comment}
                onChange={handleCommentChange}
                placeholder="Add your comment here..."
                rows={3}
                style={{ width: '100%', margin: '10px 0' }}
            />
            <button type="submit" style={{ backgroundColor: 'neon green', color: 'black' }}>
                Submit Comment
            </button>
        </form>
    );
};

export default CommentBox;