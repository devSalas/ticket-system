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
    status: z.enum(["open", "in_progress", "resolved"]),
});

interface TicketPrioritySelectorProps {
    status: "open" | "in_progress" | "resolved";
    id: string;
}


export function TicketStatusSelector({ status , id }:TicketPrioritySelectorProps) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            status
        }
    })


    // Esta función se ejecuta automáticamente cada vez que se cambia el valor del Select
    function onChangePriority(newStatus:"open" | "in_progress" | "resolved") {
        form.setValue("status", newStatus); // Actualiza el valor en el formulario
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
                    name="status"
                    render={({ field }) => (
                        <FormItem>
                            <Select {...field} onValueChange={onChangePriority}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccionar prioridad" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="open" className="">Abierto</SelectItem>
                                    <SelectItem value="in_progress">Pendiente</SelectItem>
                                    <SelectItem value="resolved">Resuelto</SelectItem>
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}
