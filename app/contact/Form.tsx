"use client"
import React from 'react';
import {useForm} from 'react-hook-form';
import emailjs from '@emailjs/browser';

export default function Form() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const sendEmail = (params) => {

        emailjs
            .send(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, process.env.NEXT_PUBLIC_EMAIL_TEMPL_ID, params, {
                publicKey: process.env.NEXT_PUBLIC_PUB_EMAIL_API_KEY,
                limitRate: {
                    throttle: 30000, // you can not send more than one email per 30 seconds.
                }
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    const onSubmit = (data) => {
        const templateParams = {
            to_name: "Carter S.",
            from_name: data.name,
            reply_to: data.email,
            message: data.message,
        }

        sendEmail(templateParams)
    };
    console.log(errors);


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center space-y-5">

            <div className="flex flex-row items-center justify-center space-x-5">
                <input
                    className="p-2 rounded hover:bg-stone-100 bg-neutral-200 duration-200 dark:hover:bg-neutral-700 dark:bg-stone-800 shadow-md"
                    type="text" placeholder="name" {...register("name", {required: true})} />
                <input
                    className="p-2 rounded hover:bg-stone-100 bg-neutral-200 duration-200 dark:hover:bg-neutral-700 dark:bg-stone-800 shadow-md"
                    type="email" placeholder="email" {...register("email", {required: true})} />
            </div>

            <textarea rows={10}
                      className="p-2 rounded hover:bg-stone-100 bg-neutral-200 duration-200 dark:hover:bg-neutral-700 dark:bg-stone-800 shadow-md" {...register("message", {
                required: true,
                max: 256,
                min: 50
            })} />

            <input
                className="cursor-pointer capitalize self-end px-4 w-fit p-2 rounded hover:bg-stone-100 bg-neutral-200 duration-200 dark:hover:bg-neutral-700 dark:bg-stone-800 shadow-md"
                type="submit"/>
        </form>
    );
}