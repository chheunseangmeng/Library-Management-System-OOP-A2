import { CategoryType } from "./enum/CategoryType";

export class Category {
    static SCIENCE: CategoryType;
    static FICTION(FICTION: any) {
        throw new Error("Method not implemented.");
    }
    // Attributes
    private categoryId: number;
    private categoryName: string;
    private createdAt: Date;
    private updatedAt: Date;
    private description: string;
    private categoryType: CategoryType; // Corrected to single CategoryType enum

    // Constructor
    constructor(categoryId: number, categoryName: string, description: string, categoryType: CategoryType) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.description = description;
        this.categoryType = categoryType;
        this.createdAt = new Date(); // Automatically set to current date/time
        this.updatedAt = new Date(); // Automatically set to current date/time
    }

    // Methods
    public createCategory(): Category {
        // Logic to create a category (e.g., save to a database)
        console.log(`Creating category: ${this.categoryName}`);
        return this;
    }

    public deleteCategory(): boolean {
        // Logic to delete a category (e.g., remove from a database)
        console.log(`Deleting category with ID: ${this.categoryId}`);
        return true; // Return true if deletion is successful
    }

    public updateCategory(): Category {
        // Logic to update a category (e.g., update in a database)
        this.updatedAt = new Date(); // Update the updatedAt timestamp
        console.log(`Updating category: ${this.categoryName}`);
        return this;
    }

    public getCategoryById(id: number): Category | null {
        // Logic to retrieve a category by ID (e.g., fetch from a database)
        if (this.categoryId === id) {
            console.log(`Found category with ID: ${id}`);
            return this;
        }
        return null; // Return null if not found
    }

    public getAllCategories(): Category[] {
        // Logic to retrieve all categories (e.g., fetch from a database)
        console.log("Retrieving all categories");
        return [this]; // Return an array with this category as an example
    }

    // Getters (optional, for accessing private attributes)
    public getCategoryId(): number {
        return this.categoryId;
    }

    public getCategoryName(): string {
        return this.categoryName;
    }

    public getCreatedAt(): Date {
        return this.createdAt;
    }

    public getUpdatedAt(): Date {
        return this.updatedAt;
    }

    public getDescription(): string {
        return this.description;
    }

    public getCategoryType(): CategoryType {
        return this.categoryType; // Added getter for categoryType
    }

    // Setters (optional, for modifying attributes)
    public setCategoryName(name: string): void {
        this.categoryName = name;
        this.updatedAt = new Date();
    }

    public setDescription(description: string): void {
        this.description = description;
        this.updatedAt = new Date();
    }

    public setCategoryType(categoryType: CategoryType): void {
        this.categoryType = categoryType; // Corrected setter for categoryType
        this.updatedAt = new Date();
    }
}

