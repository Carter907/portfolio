'use client'
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import emailjs from '@emailjs/browser';

export default function ContactForm() {

    const [status, setStatus] = useState(0);


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
                    setStatus(1);
                },
                () => {
                    setStatus(2);

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
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                    className="w-full p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500/50 transition-all placeholder:text-stone-400"
                    type="text" placeholder="Name" {...register("name", {required: true})} />
                <input
                    className="w-full p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500/50 transition-all placeholder:text-stone-400"
                    type="email" placeholder="Email" {...register("email", {required: true})} />
            </div>

            <textarea rows={8}
                      className="w-full p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500/50 transition-all placeholder:text-stone-400"
                      placeholder="Your message..."
                      {...register("message", {
                required: true,
                max: 256,
                min: 50
            })} />

            <div className="min-h-[24px]">
                {status === 1 ?
                    <p className="text-green-600 dark:text-green-400 font-medium">Message sent successfully!</p> :
                    status === 2 ?
                    <p className="text-red-600 dark:text-red-400 font-medium">Please wait before sending another message.</p> :
                    null}
            </div>

            <input
                className="px-8 py-3 rounded-xl bg-stone-900 text-white dark:bg-stone-100 dark:text-black font-bold hover:opacity-90 transition-opacity cursor-pointer shadow-lg w-fit self-end"
                type="submit"
                value="Send Message"
            />
        </form>
    );
}