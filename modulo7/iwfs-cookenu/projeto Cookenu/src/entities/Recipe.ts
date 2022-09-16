export class Recipe {
    constructor(
        private id: string,
        private title:string, 
        private description:string,
        private createdAt: string,
        ) {}

        static toRecipeModel(data: any): Recipe{
            return new Recipe(data.id, data.title, data.description, data.createdAt)
        }
    }