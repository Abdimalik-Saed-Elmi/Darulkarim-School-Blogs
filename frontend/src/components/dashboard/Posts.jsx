import { useEffect, useState } from 'react';
import DialogForm from './DialogForm';
import axios from 'axios';
import toast from 'react-hot-toast';
import Post from './Post';
import SkeletonPost from './SkeletonPost';
import { useUser } from '@/hooks/useUser';
import { useNavigate } from 'react-router-dom';

export default function Posts() {
    const navigate = useNavigate();
    const { user } = useUser();

    const [postData, setPostData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const readUserPosts = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get('/api/post/get-user-posts');
                setPostData(data);
                setLoading(false);
                // Perform further actions like redirecting the user
            } catch (error) {
                toast.error(error.response?.data?.message || "Failed to fetch posts");
                console.error('Error fetching posts', error.response?.data);
                setLoading(false);
            }
        };

        if (user) {
            readUserPosts();
        } else {
            navigate("/login");
        }
    }, [user, navigate]); // Added user and navigate to the dependency array

    const handleDelete = async (postId) => {
        if (!confirm("Are you sure you want to delete this?")) return;

        const previousPosts = [...postData];
        const updatedPosts = postData.filter(post => post._id !== postId);
        setPostData(updatedPosts);
        try {
            await axios.delete('/api/post/delete-post/' + postId);
            toast.success("Post deleted successfully!");
        } catch (error) {
            setPostData(previousPosts);
            toast.error(error.response?.data?.message || "Failed to delete post");
            console.error('Error deleting post', error.response?.data);
        }
    };

    return (
        <>
            <div>
                <div className=''>
                    {user ? (
                        <>
                            <div className='my-10 flex justify-center items-center '>
                                <DialogForm />
                            </div>

                            {loading && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <SkeletonPost />
                                    <SkeletonPost />
                                    <SkeletonPost />
                                    <SkeletonPost />
                                    <SkeletonPost />
                                    <SkeletonPost />
                                </div>
                            )}

                            {!loading && postData && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {postData?.map(post => (
                                        <Post
                                            key={post._id}
                                            post={post}
                                            onDelete={handleDelete}
                                        />
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        // This part will not be rendered because the redirect happens in useEffect
                        <div>Redirecting to login...</div>
                    )}
                </div>
            </div>
        </>
    );
}