"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

/* import { toast } from "@/components/hooks/use-toast" */
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import { updateTicket } from "@/services/ticket-in-client"

const FormSchema = z.object({
    priority: z.enum(["low", "medium", "high"]),
});

interface TicketPrioritySelectorProps {
    priority: "low" | "medium" | "high";
    id: string;
}


export function TicketPrioritySelector({ priority, id }:TicketPrioritySelectorProps) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            priority
        }
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)
        /*  toast({
           title: "You submitted the following values:",
           description: (
             <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
               <code className="text-white">{JSON.stringify(data, null, 2)}</code>
             </pre>
           ),
         }) */
    }

    // Esta función se ejecuta automáticamente cada vez que se cambia el valor del Select
    function onChangePriority(newPriority: "low" | "medium" | "high") {
        form.setValue("priority", newPriority); // Actualiza el valor en el formulario
        form.handleSubmit(async (values) => {
            const data = await updateTicket(values, id)
            console.log({data})
            if(!data){
                toast({
                    title: "error al actualizar la prioridad"
                  })
            }

            return toast({
                title: data.message
              })

        })(); // Ejecuta la función de submit de inmediato
    }

    return (
        <Form {...form}>
            <form className="space-y-6">
                <FormField
                    control={form.control}
                    name="priority"
                    render={({ field }) => (
                        <FormItem>
                            <Select {...field} onValueChange={onChangePriority}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccionar prioridad" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="low" className="">Bajo</SelectItem>
                                    <SelectItem value="medium">Medio</SelectItem>
                                    <SelectItem value="high">Alto</SelectItem>
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}
