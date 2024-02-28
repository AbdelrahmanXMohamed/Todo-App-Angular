export class TodoItem {
    taskName?: string;
    creator = 'me';
    createdAt = new Date();
    status?: string;
}