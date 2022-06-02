import React, { useState } from 'react';
import fileInput from '../../Assets/Image_Icon/Icon/cloud-upload-outline 1.png'

const AddService = () => {
    const [file, setFile] = useState(null)
    const getFile = (e) => {
        console.log(e.target.files[0])
        setFile(e.target.files[0])
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const title = e.target.title.value;
        const description = e.target.description.value;
        const image = file;
        console.log(file)

    }
    return (
        <div className='px-8 mt-8'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-8' >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0'>
                    <div class="form-control w-full max-w-xs order-1">
                        <label class="label">
                            <span class="label-text font-bold">Service Title</span>
                        </label>
                        <input type="text" name='title' class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className='order-3 md:order-2'>
                        <input onChange={getFile} type="file" name='file' id="file" className='hidden' />
                        <label class="label">
                            <span class="label-text font-bold">Image</span>
                        </label>
                        <div className='flex'>
                            <label for='file' className='flex items-center border border-primary py-1 px-4 rounded-md'>
                                <img className='w-8 mr-4' src={fileInput} alt="" /> <span className='font-bold'>Upload Photo</span>
                            </label>
                            <label class="label">
                                <span class="label-text-alt font-bold">{file && file.name}</span>
                            </label>
                        </div>
                    </div>
                    <div class="form-control order-2 md:order-3">
                        <label class="label">
                            <span class="label-text font-bold">Description</span>
                        </label>
                        <textarea name='description' class="textarea textarea-bordered h-24 w-full max-w-xs" ></textarea>
                    </div>
                </div>
                <div>
                    <input className='btn btn-primary px-8 py-3' type="submit" value={'Submit'} />
                </div>
            </form>
        </div>
    );
};

export default AddService;