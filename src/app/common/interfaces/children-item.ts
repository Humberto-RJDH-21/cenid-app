import { BadgeItem } from '.';

export interface ChildrenItem {
    route: string;
    name: string;
    icon: string;
    type?: string;
    badge?: BadgeItem[];
}
