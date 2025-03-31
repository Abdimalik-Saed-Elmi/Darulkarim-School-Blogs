import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import DialogForm from './DialogForm';
import { Button } from '../ui/button';
import PropTypes from 'prop-types'  

export default function Post({ post, onDelete }) {
    return (

        <Card>
            <CardHeader>
                <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{post.content}</CardDescription>
                {post.image && <img src={post.image} alt={post.title} className="mt-4 w-aut h-[350px]" />}
                <div className="flex justify-end space-x-2 mt-4">
                    <DialogForm
                        postToEdit={post}
                        buttonTitle='Update Post'
                    // onPostUpdated={onPostUpdated}
                    />
                    {/*  */}
                    <Button
                        onClick={() => onDelete(post._id)}

                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Delete
                    </Button>
                </div>
            </CardContent>
        </Card>

    );
}

Post.propTypes = {
    post: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      image: PropTypes.string, // Add image prop here
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
  };
