import {Document} from 'mongoose';

export interface Tutorial extends Document{
    readonly title: string;
    readonly description: string;
    readonly published: boolean;
}