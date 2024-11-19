import pool from "../config/configDb.js";
import { Event } from "../types/event.js";

export async function saveNewEvent(event: Event): Promise<Event> {
    const queryString = `
        INSERT INTO "Events" ("eventName", "location", "eventType", "ticketPrice", "description")
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
    `;
    const values = [event.eventName, event.location, event.eventType, event.ticketPrice, event.description || null];
    const result = await pool.query(queryString, values);
    return result.rows[0];
}

export async function getAllEvents(): Promise<Event[]> {
    const queryString = `SELECT * FROM "Events";`;
    const result = await pool.query(queryString);
    return result.rows;
}

export async function findEventById(id: string): Promise<Event | null> {
    const queryString = `SELECT * FROM "Events" WHERE "id" = $1;`;
    const result = await pool.query(queryString, [id]);
    return result.rows.length > 0 ? result.rows[0] : null;
}

export async function updateEventById(id: string, event: Partial<Event>): Promise<Event | null> {
    const fields = Object.entries(event)
        .filter(([key, value]) => value !== undefined)
        .map(([key, value]) => `"${key}" = '${value}'`)
        .join(", ");

    if (fields.length === 0) {
        throw new Error("No hay campos para actualizar");
    }

    const queryString = `
        UPDATE "Events" 
        SET ${fields} 
        WHERE "id" = $1
        RETURNING *;
    `;
    const result = await pool.query(queryString, [id]);
    return result.rows.length > 0 ? result.rows[0] : null;
}

export async function deleteEventById(id: string): Promise<string> {
    const queryString = `DELETE FROM "Events" WHERE "id" = $1;`;
    const result = await pool.query(queryString, [id]);

    if (result.rowCount === 0) {
        return `El evento con ID ${id} no se encontró.`;
    }
    return `El evento con ID ${id} fue eliminado correctamente.`;
}
