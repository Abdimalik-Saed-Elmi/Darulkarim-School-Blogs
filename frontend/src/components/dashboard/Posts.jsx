import { useEffect, useState } from 'react';
import DialogForm from './DialogForm';
import axios from 'axios';
import toast from 'react-hot-toast';
import Post from './Post';
import SkeletonPost from './SkeletonPost';

export default function Posts() {

    const [postData, setPostData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const readUserPosts = async () => {

            setLoading(true);
            try {
                const { data } = await axios.get('/api/post/get-user-posts'); // 
                setPostData(data);
                setLoading(false);
                // Perform further actions like redirecting the user
            } catch (error) {
                toast.error(error.response.data.message || "Login failed");
                console.error('Login error', error.response.data);
                setLoading(false);
            }
        };
        readUserPosts();
    }, []);



    const handleDelete = async (postId) => {

        if (!confirm("are you sure to delete this")) return;

        const previousPosts = [...postData];
        const updatedPosts = postData.filter(post => post._id != postId);
        setPostData(updatedPosts);
        try {
            await axios.delete('/api/post/delete-post/' + postId); // 
            setLoading(false);
            // Perform further actions like redirecting the user
        } catch (error) {
            setPostData(previousPosts);
            toast.error(error.response.data.message || "Login failed");
            console.error('Login error', error.response.data);
            setLoading(false);
        }
    };



    return (
        <>
      
        <div className=''>
            <div className='my-10'>

                <DialogForm
                />
            </div>

            {loading && (
                <div className="grid grid-cols-3 gap-4">
                    <SkeletonPost />
                    <SkeletonPost />
                    <SkeletonPost />
                    <SkeletonPost />
                    <SkeletonPost />
                    <SkeletonPost />
                </div>
            )}

            {!loading && postData && (
                <div className="grid grid-cols-3 gap-4">
                    {postData?.map(post => (
                        <Post
                            key={post._id}
                            post={post}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            )}

        </div>
        </>
    );
}