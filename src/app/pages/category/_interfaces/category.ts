export interface Category {
    id: number,
    name: string,
    description: string,
    custom_value: number,
    created_at: string,
    updated_at: string,
    CategoriesOnModules: [
        {
            Modules: {
                id: number,
                name: string,
                description: string,
                value: number,
                created_at: string,
                updated_at: string
            }
        },
    ]
}
