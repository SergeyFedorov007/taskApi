export interface Task {
    id: number;
    nick: string;
    password: string;
    role: string;
    name?: string;
    photo?: string;
    age?: string;
    sex?: string;
    blocked?: boolean;
}
