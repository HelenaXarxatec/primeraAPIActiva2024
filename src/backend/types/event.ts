export interface Event {
    id?: number; 
    eventName: string;
    location: string;
    description?: string;
    ticketPrice: number;
    eventType: string;
}