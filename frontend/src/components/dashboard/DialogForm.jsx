import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import axios from "axios";
import { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import PropTypes from 'prop-types'  


export default function DialogForm({ buttonTitle, postToEdit }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState('');
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false); // Add open state

    const isEditing = postToEdit != null;

    useEffect(() => {
        if (isEditing) {
            setTitle(postToEdit.title);
            setContent(postToEdit.content);
            setPreview(postToEdit.image);
        }
    }, [postToEdit]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        if (image) {
            formData.append('image', image);
        }

        try {
            let response;

            if (isEditing) {
                response = await axios.post('/api/post/update-post/' + postToEdit._id, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
            } else {
                response = await axios.post('/api/post/create-post', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
                console.log(response.data);
            
            }

            setTitle('');
            setContent('');
            setImage(null);
            setPreview('');
            toast.success(`Post ${isEditing ? 'updated' : 'created'} successfully`);

            setOpen(false); // Close the dialog after success
        } catch (error) {
            console.error('Post operation error', error);
            toast.error(error.response.data.message || `Failed to ${isEditing ? 'update' : 'create'} post`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <Button>{buttonTitle ? "Update Post" : "Create New Post"} </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="content">Content</Label>
                            <Input id="content" value={content} onChange={(e) => setContent(e.target.value)} />
                        </div>
                        <div>
                            <Label htmlFor="image">Image</Label>
                            <Input type="file" id="image" accept="image/*" onChange={handleImageChange} />
                            {preview && <img src={preview} alt="Preview" className="mt-4 w-full h-[200px]" />}
                        </div>
                        <DialogFooter>
                            <Button type="submit">{loading ? "Registering post..." : "Submit Post"} </Button>
                        </DialogFooter>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}

DialogForm.propTypes = {
    buttonTitle: PropTypes.string,
    postToEdit: PropTypes.object,
};