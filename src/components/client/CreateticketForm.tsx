"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"


const formSchema = z.object({
    title: z.string().min(1, "El título es obligatorio"),
    description: z.string().min(1, "La descripción es obligatoria"),
    category_id: z.string().optional(),
    area_id: z.string().optional(), // Opcional si no necesita mensaje
    priority: z.string().min(1, "La prioridad es obligatoria"),
    status: z.string()
});


function CreateTicketForm() {
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            category_id: "",
            area_id: "",
            priority: "",
            status: ""
        }
    })



    async function onSubmit(values: z.infer<typeof formSchema>) {

        /* Al crear un tiket, se asigna el status a "Open", la area_id y la categoria_id */
        try {
            const res = await fetch("http://localhost:8000/api/tickets", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json', // Si estás enviando JSON
                    'Accept': 'application/json', // Acepta respuestas en JSON
                    'Authorization': 'Bearer 6|ghoo52YXhaVtU5e5wqcoJ7pEJ8AX18GtkqNMTxGsf8f97d24'
                },
                credentials: 'include', // Incluye cookies de sesión
                body: JSON.stringify({
                    title: values.title,
                    description: values.description,
                    category_id: values.category_id,
                    area_id: "1",
                    priority: values.priority,
                    status: "open"
                }),
            });
    
    
    
            if (!res.ok) {
    
                const json = await res.json();
                console.log(json)
            }
    
            const json = await res.json();
            console.log("respuesta", json)
    
            toast({
                title: "Éxito",
                description: "El ticket se creó correctamente.",
                variant: "default", // Puedes usar otras variantes como "success"
            });
        } catch (error) {
            console.log(error)
        }



    }


    return (
        <div className="max-w-7xl m-auto">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-[500px] m-auto flex flex-col gap-y-2">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>descripción</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Describenos tu problema"
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="category_id"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Categoria de Ticket</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecciona una prioridad" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="1">reparación</SelectItem>
                                        <SelectItem value="2">comprar</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="priority"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Prioridad</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecciona una prioridad" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="low">bajo</SelectItem>
                                        <SelectItem value="medium">medio</SelectItem>
                                        <SelectItem value="high">alto</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button>
                        Crear Ticket
                    </Button>
                </form>

            </Form>

        </div>
    );
}

export default CreateTicketForm;