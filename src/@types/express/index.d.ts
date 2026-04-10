declare namespace Express {
    export interface Request {
        user: {
            id: string;
        };

        establishment: {
            establishment_id: string;
            logo_currency: string;
        };
    }
}
