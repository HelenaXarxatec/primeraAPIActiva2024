import { saveNewEvent, getAllEvents, findEventById, updateEventById, deleteEventById } from "../models/eventModel.js";
import { Event } from "../types/event.js";

export async function newEvent(event: Event): Promise<any> {
    try {
        if (!event.eventName || !event.location || !event.eventType || event.ticketPrice === undefined) {
            return {
                error: "Campos requeridos faltantes",
                details: {
                    eventName: !event.eventName ? "El nombre del evento es requerido" : null,
                    location: !event.location ? "La ubicación es requerida" : null,
                    eventType: !event.eventType ? "El tipo de evento es requerido" : null,
                    ticketPrice: event.ticketPrice === undefined ? "El precio del ticket es requerido" : null,
                },
            };
        }
        return await saveNewEvent(event);
    } catch (error: any) {
        console.error("Error al crear el evento:", error.message);
        return `Error al crear el evento: ${error.message}`;
    }
}

export async function getAll(): Promise<any> {
    try {
        return await getAllEvents();
    } catch (error: any) {
        console.error("Error al obtener los eventos:", error.message);
        return `Error al obtener los eventos: ${error.message}`;
    }
}

export async function getById(id: string): Promise<any> {
    try {
        const event = await findEventById(id);
        if (!event) {
            return `El evento con ID ${id} no fue encontrado.`;
        }
        return event;
    } catch (error: any) {
        console.error("Error al obtener el evento:", error.message);
        return `Error al obtener el evento: ${error.message}`;
    }
}

export async function updateEvent(id: string, event: Partial<Event>): Promise<any> {
    try {
        const updatedEvent = await updateEventById(id, event);
        if (!updatedEvent) {
            return `No se pudo actualizar. El evento con ID ${id} no existe.`;
        }
        return updatedEvent;
    } catch (error: any) {
        console.error("Error al actualizar el evento:", error.message);
        return `Error al actualizar el evento: ${error.message}`;
    }
}

export async function deleteEvent(id: string): Promise<any> {
    try {
        return await deleteEventById(id);
    } catch (error: any) {
        console.error("Error al eliminar el evento:", error.message);
        return `Error al eliminar el evento: ${error.message}`;
    }
}
