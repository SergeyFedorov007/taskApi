export interface Task {
    id: number;
    title: string;
    description: string;
    assignee: string;
    author: string;
    severity?: string;
    estimate?: string;
}
