import { Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

export interface Level {
    cdLevel: number;
    dsLevel: string;
    nameLevel: string;
}

export const formLevel = {
    cdLevel: [null, Validators.required],
    dsLevel: [null, Validators.required],
    nameLevel: [null]
};

export const defaultLevels = [
    {
        cdLevel: 1,
        dsLevel: 'Level 1',
        nameLevel: 'Initial Level'
    },
    {
        cdLevel: 2,
        dsLevel: 'Level 2',
        nameLevel: 'Second Level'
    },
    {
        cdLevel: 3,
        dsLevel: 'Level 3',
        nameLevel: 'Third Level'
    },
    {
        cdLevel: 4,
        dsLevel: 'Level 4',
        nameLevel: 'Fourth Level'
    },
    {
        cdLevel: 5,
        dsLevel: 'Level 5',
        nameLevel: 'Five Level'
    },
    {
        cdLevel: 6,
        dsLevel: 'Level 6',
        nameLevel: 'Six Level'
    },
    {
        cdLevel: 7,
        dsLevel: 'Level 7',
        nameLevel: 'Seven Level'
    },
    {
        cdLevel: 8,
        dsLevel: 'Toefl 1',
        nameLevel: 'Pre Toefl'
    },
    {
        cdLevel: 9,
        dsLevel: 'Toefl 2',
        nameLevel: 'Toefl'
    }
];



@Injectable()
export class Levels {
    levels: Level[];

    constructor() {
        this.levels = defaultLevels;
    }

    getForm() {
        return formLevel;
    }

    getData() {
        return this.levels;
    }
}
