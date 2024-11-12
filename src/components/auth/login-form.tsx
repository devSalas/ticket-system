"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters."
    }),
    password: z.string().min(8,{
        message:"no seas webon minimo son 8 digitos."
    })
})

function onSubmit(values: z.infer<typeof formSchema>) {

    console.log(values)
    const getData =async ()=>{
        const res  = await fetch('http://127.0.0.1:8000/api/login',{ method:"POST",headers:{'Content-Type': 'application/json' }})
        const json = await res.json()
        console.log({data:json})
    }   

    getData()
}


export function LoginForm() {


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })


    return (
        <div className="p-[20px] py-[40px] sm:px-[35px] sm:py-[70px]  lg:p-[100px]">
            <div className="max-w-[500px] m-auto px-[15px] py-[20px]  sm:p-[40px] bg-slate-100 rounded-2xl flex flex-col gap-[20px]">
            <h1 className="text-center text-[20px] sm:text-[32px] lg:text-[40px]">Inicio de Sesión</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Correo</FormLabel>
                                <FormControl>
                                    <Input placeholder="esteban@gmail.com" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contraseña</FormLabel>
                                <FormControl>
                                    <Input placeholder="******" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full">Iniciar Sesión</Button>
                </form>
            </Form>
        </div>
        </div>
    )
}
