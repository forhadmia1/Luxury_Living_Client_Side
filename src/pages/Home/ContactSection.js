import React from 'react';
import { useForm } from 'react-hook-form';

const ContactSection = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <section className='my-20 md:my-52'>
            <div className='w-full md:w-1/2 p-4'>
                <div className='text-center'>
                    <h4 className='font-semibold'>Contact</h4>
                    <h2 className='text-xl md:text-3xl font-bold text-primary'>Let us handle your
                        <br /> project, professionally.</h2>
                </div>
                <div className='mt-20'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-2 gap-4'>
                            <div class="form-control">
                                <input placeholder="First Name" class="input w-full max-w-xs" {...register('firstName', { required: true })} />
                                <label class="label">
                                    {errors.firstName && <p className='text-red-500'>First name is required.</p>}
                                </label>
                            </div>
                            <div class="form-control">
                                <input placeholder="Last Name" class="input w-full max-w-xs" {...register('lastName', { required: true })} />
                                <label class="label">
                                    {errors.lastName && <p className='text-red-500'>Last name is required.</p>}
                                </label>
                            </div>
                            <div class="form-control ">
                                <input placeholder="Email Address" class="input w-full max-w-xs" {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'Invalid Email'
                                    },
                                })} />
                                <label class="label">
                                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                                </label>
                            </div>
                            <div class="form-control">
                                <input placeholder="Phone Number" class="input w-full max-w-xs" {...register('phone', { required: true })} />
                                <label class="label">
                                    {errors.phone && <p className='text-red-500'>Phone number is required.</p>}
                                </label>
                            </div>
                        </div>
                        <div class="form-control">
                            <textarea class="textarea" placeholder="Message" {...register('message', { required: true })} />
                            <label class="label">
                                {errors.message && <p className='text-red-500'>Please enter message.</p>}
                            </label>
                        </div>
                        <div className='flex justify-center mt-5'>
                            <input className='btn btn-primary px-8 py-2 text-white' type="submit" value={'Send Message'} />
                        </div>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default ContactSection;