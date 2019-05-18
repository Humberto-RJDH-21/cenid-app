import { BadgeItem } from './badge-item';
import { ChildrenItem } from './children-item';


export interface MenuItem {
    route: string;
    name: string;
    type: string;
    icon: string;
    badge?: BadgeItem[];
    children?: MenuItem[];
}
